WonderLab Project Software Requirements Specification (SRS)

Introduction
The WonderLab project aims to develop a flexible application for creating, editing, testing, and sharing designs using a single widget. The application will utilize Vue 3, Typescript, and Composition API.
System Overview
2.1 App.vue
Hosts main layout: Header, Sidebar, and WonderLab components.
Manages global application state and preferences.
2.2 HeaderComponent.vue

Provides lab state save/load functionality and global actions or settings.
2.3 SidebarComponent.vue

Offers widget assembly parts and customization options for widget properties.
2.4 WonderLab.vue

Manages workspace for user interaction with widgets and connection handling.
2.5 WonderWidget.vue

Implements core functionality and manages input/output properties and connections.
2.6 CustomProperties.vue (sub-component of WonderWidget)

Contains specific properties for widget customization.
Functional Requirements
3.1 Authentication: Email/password and Single Sign-On (SSO).
3.2 Responsive Design: Compatibility across various devices (mobile, tablet, desktop).
3.3 User Roles: Guest, user, and admin roles.
3.4 Sharing: Toggle widgets as "shareable" for public gallery display.
3.5 Data Storage: MongoDB and local files on the hosting server.
3.6 Data Formats: JSON and YAML.
3.7 API Integrations: OpenAI and Hugging Face API for AI language processing.
3.8 Testing and Deployment: Continuous Integration testing through GitHub Actions.
3.9 Accessibility: Color-blind friendly colors and Google's Web Speech API integration.
3.10 Localization: American English initially, expandable later.
Non-Functional Requirements
4.1 Maintainability and Scalability: Vue 3, Typescript, and Composition API.
4.2 Performance: Optimization for user interaction and widget handling.
Additional Components
Vuex: State management.
Quasar: UI framework.
Axios: HTTP requests.
Vue-draggable: Drag and drop features.
