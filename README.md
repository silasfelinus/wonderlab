WonderLab Project Software Requirements Specification (SRS)

The WonderLab project is a hobby portfolio project for creating, editing, testing, and sharing complex programmatic api calls using a single widget. The target audience includes designers, developers, and hobbyists looking for an intuitive way to work with natural language processors, . The project utilizes Vue 3, Typescript, and Composition API.

System Overview
2.1 App.vue: Hosts main layout, manages global application state and preferences, and provides collapsible components for an improved user experience.

2.2 HeaderComponent.vue: Offers lab state save/load functionality and global actions or settings.

2.3 SidebarComponent.vue: Provides a selection of widget assembly parts and customization options for widget properties.

2.4 WonderLab.vue: Creates a workspace for user interaction with widgets and connection handling.

2.5 WonderWidget.vue: Implements core functionality, and manages input/output properties and connections.

2.6 CustomProperties.vue (sub-component of WonderWidget): Contains specific properties for widget customization.

2.7 FooterComponent.vue: Displays copyright, attribution, and any additional footer information.

2.8 WonderChat.vue: modular livechat window

Functional Requirements
3.1 Authentication: Email/password and Single Sign-On (SSO) with role-based access control.
3.2 Responsive Design: Compatibility across various devices (mobile, tablet, desktop).
3.3 User Roles: Guest (limited access), user (full access to features), and admin (user management and moderation).
3.4 Sharing: Toggle widgets as "shareable" for public gallery display.
3.5 Data Storage: MongoDB and local files on the hosting server.
3.6 Data Formats: JSON and YAML.
3.7 API Integrations: OpenAI and Hugging Face API for AI language processing.
3.8 Testing and Deployment: Continuous Integration testing through GitHub Actions.
3.9 Accessibility: Color-blind friendly colors and Google's Web Speech API integration.
3.10 Localization: American English initially.

Non-Functional Requirements
4.1 Maintainability and Scalability: Vue 3, Typescript, and Composition API ensure maintainable and scalable code.
4.2 Performance: Optimization for user interaction and widget handling.
4.3 Security: Application of best practices for secure data storage and communication.
4.4 Usability: Intuitive interface and user-friendly design.
4.5 Reliability: Consistent performance across different devices and environments.

Additional Components
Vuex: State management.
Quasar: UI framework.
Axios: HTTP requests.
Vue-draggable: Drag and drop features.
