FROM python:3.11-slim

WORKDIR /app

# Install uv globally in container and use it directly
RUN pip install uv

# Set env so uv doesn't look for .venv
ENV UV_VENV_IGNORE=true

COPY . /app

# Install deps directly into global site-packages
RUN uv pip install -r requirements.txt --system


CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
