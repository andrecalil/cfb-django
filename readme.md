# Comunidade Fuji Brasil

This project is the new initiative for Comunidade Fuji, built with Django for the backend and pure React for the frontend.

## Overview

The project is divided into two main parts:
- **Backend:** Developed using Django.
- **Frontend:** Built with pure React.

## Features

- Scalable backend architecture with Django.
- Modern front-end implemented in React.
- RESTful API integration between Django and React.
- Modular codebase for easy maintenance and upgrades.

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

2. **Setup Django backend:**
    ```
    cd backend
    python -m venv env
    source env/bin/activate  # For Linux/Mac
    # .\env\Scripts\activate  # For Windows
    python manage.py migrate
    python manage.py runserver
    ```

3. **Setup React frontend:**
    ```
    cd frontend
    npm install
    npm run dev
    ```

## License

This project is licensed under the MIT License.

Happy coding!