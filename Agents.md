# AGENTS.md

## Overview
- Stack: Python, React, Node.js, Docker, Kubernetes

## General Instruction
- Always discuss with the user to gather requirements before writing any code.
- Apply best practices for code quality, testing, and documentation.
- Ensure loose coupling and high cohesion in code design. Apply modular programming principles.
- Apply design patterns where appropriate.
- Follow version control best practices.
- User is not always right, ask them to clarify ambigious. Never assume requirements.
- Always write unit tests and integration tests for new features.
- Document code and system design thoroughly.
- Run `docker run --rm -it -v {APPROPRIATE MOUTING POINTS} -w /app {DOCKER IMAGE} {COMMAND}` to run and test code in a consistent environment.

## Project Structure
- `apis/`: API definitions and implementations.
- `build/`: Contains build scripts and configurations.
- `cmd/`: CLI applications for the project.
- `config/`: Configuration files and templates.
- `deployments/`: Deployment manifests and scripts. 
- `docs/`: Documentation related to strategies and system design.
- `internal/`: Project internal libraries and modules.
- `pkg/`: Public libraries and packages.
- `scripts/`: Utility scripts for automation and maintenance.
- `test/`: Test cases and testing utilities.
- `web/`: Web application components, frontend, user interfaces.