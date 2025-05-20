FROM node:20-bullseye-slim AS frontend

WORKDIR /app

COPY /frontend /app/frontend

WORKDIR /app/frontend

RUN npm install
RUN npm run build

FROM python:alpine AS backend

COPY --from=frontend /app/frontend/dist /app/frontend/dist

ENV SUPABASE_URL=''
ENV SUPABASE_KEY=''
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV DEBUG=False

COPY /backend /app/backend

WORKDIR /app/backend

# Create a non-privileged user that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
# ARG UID=10001
# RUN adduser \
#     --disabled-password \
#     --gecos "" \
#     --home "/nonexistent" \
#     --shell "/sbin/nologin" \
#     --no-create-home \
#     --uid "${UID}" \
#     appuser

RUN pip install --upgrade pip 
RUN pip install -r requirements.txt

# Switch to the non-privileged user to run the application.
#USER appuser

EXPOSE 8000

#RUN python manage.py migrate
RUN mkdir -p /app/staticfiles
RUN python manage.py collectstatic --clear --no-input

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers", "3", "backend.wsgi:application"]