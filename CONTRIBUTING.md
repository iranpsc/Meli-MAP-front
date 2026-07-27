# Contributing to Meli MAP Front

Thank you for your interest in contributing to **Meli MAP Front**.

Meli MAP Front is a React-based interactive map application that uses **React 18**, **React Leaflet**, **Leaflet**, **Redux Toolkit**, **React Redux**, **Axios**, and **Pusher** to provide an interactive map experience with dynamic map data and real-time updates.

The project uses **Create React App** and follows a component-based architecture with separate areas for UI components, Redux state management, and shared services.

We welcome contributions that improve functionality, reliability, performance, accessibility, testing, documentation, and maintainability.

---

## Table of Contents

* [Code of Conduct](#code-of-conduct)
* [Before You Start](#before-you-start)
* [Ways to Contribute](#ways-to-contribute)
* [Development Environment](#development-environment)
* [Project Architecture](#project-architecture)
* [Environment Configuration](#environment-configuration)
* [Running the Project](#running-the-project)
* [Branching Strategy](#branching-strategy)
* [Component Guidelines](#component-guidelines)
* [Map Development Guidelines](#map-development-guidelines)
* [Redux and State Management](#redux-and-state-management)
* [API Integration](#api-integration)
* [Real-Time Updates with Pusher](#real-time-updates-with-pusher)
* [Service Layer](#service-layer)
* [Performance Guidelines](#performance-guidelines)
* [Testing Requirements](#testing-requirements)
* [Security Requirements](#security-requirements)
* [Commit Guidelines](#commit-guidelines)
* [Pull Request Process](#pull-request-process)
* [Pull Request Checklist](#pull-request-checklist)
* [Code Review](#code-review)
* [Documentation](#documentation)
* [Breaking Changes](#breaking-changes)
* [License](#license)

---

## Code of Conduct

All contributors are expected to communicate respectfully and professionally.

Contributions should encourage:

* Constructive technical discussions
* Respectful code reviews
* Clear communication
* Collaborative problem solving
* A welcoming development environment

Please review the repository's [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

---

## Before You Start

Before starting development:

1. Check existing Issues.
2. Check open Pull Requests.
3. Search for existing implementations related to your change.
4. Confirm that the requested functionality does not already exist.
5. For significant architectural changes, discuss the approach with maintainers before implementation.

For large or potentially breaking changes, opening an Issue before development is recommended.

---

## Ways to Contribute

You can contribute to Meli MAP Front by:

* Fixing bugs.
* Improving map rendering.
* Improving map interaction.
* Improving application performance.
* Improving Redux state management.
* Improving API integration.
* Improving real-time update handling.
* Adding automated tests.
* Improving accessibility.
* Improving responsive behavior.
* Improving documentation.
* Improving error handling.
* Improving code quality.
* Improving security.
* Updating dependencies responsibly.

Contributions are not limited to code.

Bug reports, testing, documentation improvements, and constructive technical feedback are also valuable.

---

## Development Environment

The project is built with:

* React 18
* React DOM 18
* Create React App
* React Leaflet
* Leaflet
* Redux Toolkit
* React Redux
* Axios
* Pusher JS
* UUID
* React Testing Library
* Jest DOM
* User Event

The exact versions and dependencies are defined in `package.json`.

Before contributing, make sure Node.js and npm are installed.

Verify your environment:

```bash
node -v
```

```bash
npm -v
```

---

## Installing the Project

Clone the repository:

```bash
git clone https://github.com/iranpsc/Meli-MAP-front.git
```

Move into the project directory:

```bash
cd Meli-MAP-front
```

Install dependencies:

```bash
npm install
```

---

## Project Architecture

The project follows a lightweight React architecture.

The main source structure is:

```text
src/
├── components/
│   ├── MapLayout.js
│   └── MapRectangle.js
│
├── features/
│   └── assetsSlice.js
│
├── services/
│   ├── Utility.js
│   └── useChannel.js
│
├── App.js
├── index.js
├── main.css
└── store.js
```

### `components/`

Contains React UI and map-related components.

Current core components include:

* `MapLayout`
* `MapRectangle`

### `features/`

Contains Redux Toolkit state management.

The current feature state is managed through:

* `assetsSlice.js`

### `services/`

Contains shared logic and integrations.

Current services include:

* Map utilities and color configuration
* Pusher real-time channel integration

### `store.js`

Configures the Redux store and registers the `assets` reducer.

### `App.js`

Acts as the main application component and renders the map layout.

### `index.js`

Initializes the React application and provides the Redux store through `Provider`.

---

## Environment Configuration

The application uses Create React App environment variables prefixed with:

```text
REACT_APP_
```

Environment-specific configuration should be stored in environment files and should not be hard-coded in application logic.

The current project configuration includes variables for:

```env
REACT_APP_UPDATE_MAP=
REACT_APP_GET_MAP=
REACT_APP_MAX_ZOOM=

REACT_APP_PUSHER_APP_KEY=
REACT_APP_PUSHER_CHANNEL_NAME=
REACT_APP_PUSHER_EVENT_NAME=
```

These values control:

* Map update API
* Map data API
* Maximum zoom level for loading detailed map data
* Pusher application key
* Pusher channel
* Pusher event

Before running the application, make sure the required environment configuration is available.

---

## Environment Security

Do not commit sensitive credentials to the repository.

Never commit:

* Private API keys
* Secret API credentials
* Access tokens
* Database credentials
* Private Pusher credentials
* Production secrets
* Internal service credentials

Important:

Create React App exposes variables prefixed with `REACT_APP_` to the browser bundle.

Therefore:

> **Never put a secret or private credential in a `REACT_APP_*` variable.**

Anything stored in a `REACT_APP_*` variable should be considered publicly accessible to users of the application.

Public configuration such as API URLs, public application keys, channel names, and other non-sensitive settings may be appropriate.

---

## Running the Project

Start the development server:

```bash
npm start
```

The application will normally be available at:

```text
http://localhost:3000
```

The development server automatically reloads when source files are changed.

---

## Available Scripts

### Start Development Server

```bash
npm start
```

Starts the application in development mode.

---

### Run Tests

```bash
npm test
```

Launches the Create React App test runner.

The project includes testing dependencies based on:

* React Testing Library
* Jest DOM
* User Event

---

### Build for Production

```bash
npm run build
```

Creates an optimized production build in:

```text
build/
```

The generated build should be used for deployment rather than the development server.

---

### Eject

```bash
npm run eject
```

The project is based on Create React App.

The `eject` command should not be used unless there is a clear architectural reason and the change has been discussed with maintainers.

Ejecting is a one-way operation and significantly changes the project configuration.

---

## Branching Strategy

Do not commit directly to protected or main branches.

Create a dedicated branch for each change.

Recommended branch names:

```text
feature/<description>
fix/<description>
refactor/<description>
test/<description>
docs/<description>
chore/<description>
performance/<description>
security/<description>
```

Examples:

```text
feature/map-popup
fix/map-zoom-loading
feature/realtime-map-updates
test/assets-slice
refactor/map-components
performance/map-rendering
security/update-environment-config
docs/contributing-guide
```

Keep each branch focused on one logical objective.

---

## Component Guidelines

React components should be:

* Focused
* Reusable where appropriate
* Easy to understand
* Predictable
* Testable

Avoid putting unrelated application logic inside a single component.

When a component becomes difficult to maintain, consider extracting:

* Reusable UI elements
* Map-specific logic
* Data transformation
* Event handling
* Service calls

Prefer clear component responsibilities.

---

## Map Development Guidelines

Map functionality is a core part of this project.

The project uses:

* `MapContainer`
* `TileLayer`
* `Polygon`
* `Popup`
* `useMapEvents`

through React Leaflet.

When modifying map behavior, consider:

* Map performance
* Zoom behavior
* Polygon rendering
* Coordinate conversion
* Popup content
* Large datasets
* Mobile interaction
* Browser compatibility

Changes to map rendering should be tested at different zoom levels.

---

## Map Zoom Behavior

The application uses a configured maximum zoom threshold.

Map assets are loaded when the map reaches the configured zoom level and the asset collection has not already been populated.

When changing zoom-related behavior:

* Avoid unnecessary API requests.
* Avoid repeatedly loading the same data.
* Ensure the map remains responsive.
* Verify behavior when zooming in and out repeatedly.
* Test with empty and populated asset states.

Any changes to the map loading strategy should include appropriate tests.

---

## Map Data and Coordinates

Map data is transformed before being stored in Redux.

The application currently transforms coordinate data into the format expected by React Leaflet polygons.

When modifying coordinate handling:

* Verify latitude and longitude ordering.
* Test polygon rendering.
* Test malformed coordinates.
* Test empty coordinate arrays.
* Test multiple polygons.
* Avoid mutating source API data unnecessarily.

Incorrect coordinate ordering can cause polygons to render in incorrect locations.

---

## Redux and State Management

The application uses:

* Redux Toolkit
* React Redux
* `createSlice`
* `createEntityAdapter`
* `createAsyncThunk`

The primary application state currently contains map assets.

The Redux store is configured with the `assets` reducer.

When adding new global state:

1. Determine whether the state truly needs to be global.
2. Prefer local component state for UI-only state.
3. Use Redux for shared application state.
4. Use Redux Toolkit patterns consistently.
5. Avoid duplicating the same data in multiple stores or components.

---

## Redux Entity Management

The project uses Redux Toolkit's entity adapter for managing map assets.

When modifying asset state:

* Preserve unique identifiers.
* Use entity adapter operations where appropriate.
* Avoid unnecessary duplication.
* Keep state transformations predictable.
* Ensure updates correctly target the intended entity.

When introducing a new entity type, consider whether `createEntityAdapter` is appropriate.

---

## Async Data Fetching

Map data is loaded through a Redux Toolkit async thunk.

When modifying API data fetching:

* Handle successful responses.
* Handle failed requests.
* Handle invalid responses.
* Avoid duplicate requests.
* Consider loading state.
* Consider error state.
* Keep API logic separate from presentation components where practical.

New asynchronous operations should preferably have explicit loading and error handling.

---

## API Integration

The frontend communicates with backend services through configured environment variables.

The map data endpoint is configured through:

```env
REACT_APP_GET_MAP=
```

The map update endpoint is configured through:

```env
REACT_APP_UPDATE_MAP=
```

When changing an API integration:

* Verify the API contract.
* Document request and response changes.
* Update data transformation logic.
* Add or update tests.
* Handle API failures.
* Avoid exposing sensitive information.
* Preserve backward compatibility when possible.

If an API response changes, all affected Redux transformations and map rendering logic must be reviewed.

---

## API Response Changes

The current asset processing expects map data containing feature information and properties such as:

```text
id
geometry
properties
```

The application currently uses asset properties including:

```text
address
area
date
density
region
karbari
rgb
id
```

When backend response fields are renamed or removed, the frontend data transformation must be updated accordingly.

Any API contract change should be clearly documented in the Pull Request.

---

## Real-Time Updates with Pusher

The application uses `pusher-js` for real-time map updates.

The current integration uses:

```env
REACT_APP_PUSHER_APP_KEY=
REACT_APP_PUSHER_CHANNEL_NAME=
REACT_APP_PUSHER_EVENT_NAME=
```

The Pusher connection uses the configured application key and subscribes to the configured channel and event.

When a real-time event is received, the application extracts the affected feature information and updates the corresponding Redux entity.

When modifying Pusher functionality:

* Verify the channel name.
* Verify the event name.
* Validate incoming event data.
* Handle malformed events.
* Avoid duplicate subscriptions.
* Avoid creating unnecessary Pusher connections.
* Clean up subscriptions when appropriate.
* Test behavior when the connection is unavailable.

---

## Real-Time Event Validation

Do not assume that incoming real-time data is always valid.

When handling Pusher events, validate:

* Event existence
* Feature existence
* Feature ID
* Required properties
* Expected data types

Malformed real-time data should not cause the application to crash.

---

## Pusher Connection Lifecycle

When modifying real-time functionality, pay special attention to React component lifecycle behavior.

Avoid repeatedly creating new Pusher clients or subscriptions on every render.

Prefer lifecycle-aware implementations that:

* Create subscriptions when needed.
* Reuse connections where appropriate.
* Unsubscribe when components are unmounted.
* Avoid duplicate event listeners.

Any changes in this area should include tests or clear manual verification steps.

---

## Service Layer

Shared logic should be placed in the appropriate service or utility module.

The current project contains service-related code for:

* Pusher channel integration
* Map utility configuration

When adding new shared functionality:

* Determine whether it belongs in `services`.
* Keep UI components focused on presentation and interaction.
* Avoid duplicating API or integration logic.
* Use descriptive function names.
* Keep service functions independently testable where possible.

---

## Utility Configuration

Map-related visual configuration is centralized in `Utility.js`.

This includes:

* Maximum zoom configuration
* Polygon colors
* Border colors
* Blacklisted fields for popup display

When modifying map color mappings:

* Verify all affected asset types.
* Keep color mappings consistent.
* Ensure the UI remains understandable.
* Avoid breaking existing map semantics.

---

## Popup Content

The map displays dynamic information in Leaflet popups.

When modifying popup content:

* Avoid exposing sensitive information.
* Do not display internal-only fields.
* Keep content readable.
* Ensure values are escaped safely by React.
* Avoid rendering unnecessary fields.
* Update the blacklist or field-selection logic when appropriate.

---

## Performance Guidelines

Map applications can render large amounts of geographic data.

Contributors should consider performance when changing:

* Polygon rendering
* Redux state updates
* Map zoom behavior
* API requests
* Real-time updates
* Popup rendering

Avoid unnecessary re-renders.

Avoid repeatedly fetching the same map data.

Avoid unnecessary updates to large collections of map entities.

When performance-related changes are made, include before/after measurements when possible.

---

## Testing Requirements

Testing is required for meaningful behavior changes.

The project includes testing dependencies based on:

* React Testing Library
* Jest
* Jest DOM
* User Event

Run tests with:

```bash
npm test
```

At minimum, contributors should add or update tests when changing:

* Redux state logic
* Async data fetching
* Data transformations
* Map-related business logic
* API integration behavior
* Real-time event handling
* Utility functions
* Critical user interactions

---

## Recommended Test Coverage

### Redux

Test:

* Initial state
* Successful asset fetching
* Data transformation
* Entity insertion
* Entity updates
* Invalid payloads

### API Integration

Test:

* Successful response
* Failed request
* Invalid response
* Empty response
* Network failure

### Real-Time Updates

Test:

* Valid event
* Invalid event
* Entity update
* Missing entity
* Malformed payload

### Components

Test important user-visible behavior rather than implementation details.

Focus on:

* What the user sees
* What the user can interact with
* How the application responds to events

---

## Testing Principles

Tests should be:

* Deterministic
* Isolated
* Readable
* Maintainable
* Repeatable

Avoid relying on:

* Production APIs
* Live Pusher connections
* External network availability
* Production map data

Mock external dependencies whenever appropriate.

Tests should not require access to production services.

---

## Build Validation

Before opening a Pull Request, run:

```bash
npm test
```

and:

```bash
npm run build
```

A contribution should not be submitted if the production build fails.

If a change intentionally affects the build process, clearly document the reason in the Pull Request.

---

## Security Requirements

Security is a responsibility of every contributor.

Never commit:

* Passwords
* Private API keys
* Access tokens
* Database credentials
* Private service credentials
* Production secrets

Remember that `REACT_APP_*` variables are embedded into the frontend bundle.

Therefore:

> Any value exposed through a `REACT_APP_*` variable should be treated as public.

Never use frontend environment variables to store secrets.

---

## Dependency Management

Before adding a new dependency:

1. Confirm it is necessary.
2. Check whether existing dependencies already provide the required functionality.
3. Check package maintenance status.
4. Review known security vulnerabilities.
5. Consider bundle size.
6. Consider browser compatibility.
7. Document the reason for the dependency.

Avoid adding dependencies for simple functionality that can be implemented cleanly with existing project tools.

When updating dependencies:

* Review breaking changes.
* Run the test suite.
* Run the production build.
* Check for security issues.
* Verify map behavior.

---

## Commit Guidelines

Use clear and descriptive commit messages.

Recommended format:

```text
type(scope): short description
```

Examples:

```text
feat(map): add polygon selection
fix(map): prevent duplicate asset requests
fix(realtime): handle malformed pusher events
test(assets): add async thunk tests
refactor(map): simplify polygon rendering
perf(map): reduce unnecessary asset updates
security(config): remove sensitive environment values
docs(contributing): update contribution guide
chore(deps): update react dependencies
```

Recommended commit types:

| Type       | Description             |
| ---------- | ----------------------- |
| `feat`     | New functionality       |
| `fix`      | Bug fix                 |
| `test`     | Tests                   |
| `refactor` | Code restructuring      |
| `perf`     | Performance improvement |
| `security` | Security improvement    |
| `docs`     | Documentation           |
| `chore`    | Maintenance             |
| `ci`       | CI/CD changes           |

Keep commits focused on one logical change.

---

## Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/map-improvement
```

### 2. Implement the Change

Keep the implementation focused and avoid unrelated modifications.

### 3. Add or Update Tests

Add tests for new functionality and regression tests for bug fixes.

### 4. Run Tests

```bash
npm test
```

### 5. Run Production Build

```bash
npm run build
```

### 6. Review Your Changes

Check the current status:

```bash
git status
```

Review your changes:

```bash
git diff
```

Make sure you have not accidentally committed:

* Secrets
* Production credentials
* Local environment files
* Debug files
* Temporary files
* Unrelated changes

### 7. Push Your Branch

```bash
git push origin feature/map-improvement
```

### 8. Open a Pull Request

Create a Pull Request against the appropriate target branch.

---

## Pull Request Requirements

Every Pull Request should clearly explain:

### Summary

What was changed?

### Motivation

Why was the change necessary?

### Implementation

How was the change implemented?

### Testing

What tests were added or executed?

### API Changes

Did the API contract change?

### State Changes

Did Redux state or entity structure change?

### Real-Time Changes

Did Pusher events, channels, or subscriptions change?

### UI Changes

Did map rendering or user interaction change?

### Deployment

Are new environment variables required?

---

## Pull Request Checklist

Before requesting review:

* [ ] The change is focused.
* [ ] Existing functionality was not unintentionally broken.
* [ ] Tests were added or updated where applicable.
* [ ] `npm test` passes.
* [ ] `npm run build` succeeds.
* [ ] API changes are documented.
* [ ] Redux state changes are documented.
* [ ] Pusher changes are documented.
* [ ] Map behavior was tested at relevant zoom levels.
* [ ] No secrets were committed.
* [ ] No production credentials were committed.
* [ ] Environment variable changes are documented.
* [ ] UI changes were manually verified.
* [ ] Performance impact was considered.
* [ ] Documentation was updated where necessary.

---

## Pull Requests for Map Changes

Pull Requests that modify map behavior should include:

* Description of the affected map behavior.
* Relevant zoom level information.
* Screenshots or screen recordings when appropriate.
* Information about polygon or popup changes.
* Testing details.

For example:

```text
## Map Change

Changed:
- Polygon rendering at maximum zoom.
- Popup fields.
- Asset color mapping.

Tested:
- Zoomed from level 10 to 18.
- Verified polygon rendering.
- Verified popup content.
- Verified real-time updates.
```

---

## Pull Requests for API Changes

If an API integration changes, include:

```text
## API Change

Endpoint:
<endpoint>

Previous Response:
<description>

New Response:
<description>

Frontend Changes:
- Updated Redux transformation.
- Updated affected components.

Testing:
- Successful response tested.
- Empty response tested.
- Error response tested.
```

---

## Pull Requests for Pusher Changes

For real-time functionality changes, include:

```text
## Real-Time Change

Channel:
<channel>

Event:
<event>

Changed:
- Event payload handling.
- Redux entity update.

Testing:
- Valid event tested.
- Invalid event tested.
- Reconnection behavior verified.
```

Do not include private credentials in Pull Requests.

---

## Code Review

All Pull Requests are subject to code review.

Reviewers may evaluate:

* Correctness
* React architecture
* Redux state management
* Map behavior
* API integration
* Real-time behavior
* Performance
* Security
* Test quality
* Maintainability
* Accessibility

Review feedback should be addressed before merging.

The purpose of code review is to improve the quality and reliability of the project.

---

## Documentation

Documentation should be updated when changes affect:

* Environment variables
* API endpoints
* Redux state
* Map behavior
* Pusher integration
* Development setup
* Testing
* Deployment

Documentation changes should preferably be included in the same Pull Request as the related code change.

---

## Breaking Changes

Breaking changes require additional documentation.

A Pull Request introducing a breaking change should explain:

```text
Previous Behavior
New Behavior
Reason for Change
Affected Components
Affected APIs
Migration Steps
Deployment Requirements
```

Breaking changes to backend APIs or real-time event payloads should be coordinated with the affected services and consumers.

---

## Dependency Updates

Dependency updates should be handled carefully.

Before updating major dependencies:

1. Review release notes.
2. Check breaking changes.
3. Run tests.
4. Run the production build.
5. Test map functionality.
6. Verify API integration.
7. Verify Pusher integration.
8. Check browser compatibility.

Major upgrades to React, React Leaflet, Leaflet, Redux Toolkit, or Create React App should be reviewed before merging.

---

## License

By contributing to this project, you agree that your contributions will be licensed under the same license that governs the project, as specified in [`LICENSE`](LICENSE).

---

## Thank You

Thank you for contributing to **Meli MAP Front**.

Whether you contribute code, tests, documentation, bug reports, performance improvements, accessibility improvements, or security fixes, your contribution helps improve the project.

We appreciate your time and effort.
