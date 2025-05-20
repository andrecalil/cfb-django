# Comunidade Fuji Brasil

This project is the new initiative for Comunidade Fuji, built with Django for the backend and pure React for the frontend.

## Overview

The project is divided into two main parts:
- **Backend:** Developed using Django.
- **Frontend:** Built with pure React.

## Environment Variables

### Fronend Environment File
Location: `frontend/.env.dev` (alternatively, `.env.prod`)
- VITE_API_ROOT

### Backend Environment Files
Location: `/backend/backend/.env`
Variables:
- SUPABASE_URL
- SUPABASE_KEY
- SECRET_KEY (optional, defaults to development key)
- DEBUG (optional, defaults to 0)
- DJANGO_ALLOWED_HOSTS (optional, defaults to localhost,127.0.0.1,[::1],0.0.0.0)

### Docker Environment Files
Location: `/.env`
Variables:
- SUPABASE_URL
- SUPABASE_KEY
- DEBUG

## Getting Started

### Prerequisites
- Python 3.x
- Node.js & npm/yarn
- Django
- React

### Installation

1. **Clone the repository:**
    ```
    git clone https://github.com/andrecalil/cfb-django.git
    cd your-repo
    ```

2. **Setup React frontend:**
    ```
    cd frontend
    npm install
    npm run dev
    ```

Make sure you also run `npm run build` to create the files that Django will copy over.

3. **Setup Django backend:**
    ```
    cd backend
    python -m venv env
    source env/bin/activate  # For Linux/Mac
    # .\env\Scripts\activate  # For Windows
    pip install -r /backend/requirements.txt
    python manage.py collectstatic --clear --no-input
    python manage.py migrate
    python manage.py runserver
    ```

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

## License

This project is licensed under the MIT License.

Happy coding!