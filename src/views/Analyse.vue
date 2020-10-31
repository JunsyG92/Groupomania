<template>
<div class="container-fluid py-5" style="min-height: 100vh">
    <div class="row">
        <div class="col-md-3">
            <div class="accordion" id="topLevel">
                <div class="card bg-transparent border-0">
                    <div class="card-header bg-transparent border-0" id="headingstructure">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left h2" type="button" data-toggle="collapse" data-target="#structure" aria-expanded="true" aria-controls="structure">
                                Structure
                            </button>
                        </h2>
                    </div>

                    <div id="structure" class="collapse show" aria-labelledby="headingstructure" data-parent="#topLevel">
                        <div class="card-body">
                            <div class="accordion" id="structureSecondLevel">
                                

                                <NavAccordion name="Visuel" labbeledById="headingVisuel" idNav="visuel" dataParent="structureSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-visuel-structure-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent active" id="v-visuel-structure-groupomania-tab" data-toggle="pill" href="#v-visuel-structure-groupomania" role="tab" aria-controls="v-visuel-structure-groupomania" aria-selected="false">Groupomania</a>
                                    </div>
                                </NavAccordion>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border-0">
                    <div class="card-header bg-transparent border-0" id="headingBackEnd">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed h2" type="button" data-toggle="collapse" data-target="#backEnd" aria-expanded="false" aria-controls="backEnd">
                                Back-end
                            </button>
                        </h2>
                    </div>

                    <div id="backEnd" class="collapse" aria-labelledby="headingBackEnd" data-parent="#topLevel">
                        <div class="card-body">
                            <div class="accordion" id="backEndSecondLevel">

                                <NavAccordion name="Controller" labbeledById="headingController" idNav="controller" dataParent="backEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-backend-controller-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-controller-admin-tab" data-toggle="pill" href="#v-backend-controller-admin" role="tab" aria-controls="v-backend-controller-admin" aria-selected="false">Admin</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-controller-posts-tab" data-toggle="pill" href="#v-backend-controller-posts" role="tab" aria-controls="v-backend-controller-posts" aria-selected="false">Posts</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-controller-user-tab" data-toggle="pill" href="#v-backend-controller-user" role="tab" aria-controls="v-backend-controller-user" aria-selected="false">User</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Middleware" labbeledById="headingMiddleware" idNav="middleware" dataParent="backEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-backend-middleware-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-middleware-auth-tab" data-toggle="pill" href="#v-backend-middleware-auth" role="tab" aria-controls="v-backend-middleware-auth" aria-selected="false">Auth</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-middleware-multer-avatar-tab" data-toggle="pill" href="#v-backend-middleware-multer-avatar" role="tab" aria-controls="v-backend-middleware-multer-avatar" aria-selected="false">Multer Avatar</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-middleware-multer-banner-tab" data-toggle="pill" href="#v-backend-middleware-multer-banner" role="tab" aria-controls="v-backend-middleware-multer-banner" aria-selected="false">Multer Banner</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-middleware-multer-config-tab" data-toggle="pill" href="#v-backend-middleware-multer-config" role="tab" aria-controls="v-backend-middleware-multer-config" aria-selected="false">Multer Config</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Routes" labbeledById="headingRoutes" idNav="routes" dataParent="backEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-backend-routes-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-routes-admin-tab" data-toggle="pill" href="#v-backend-routes-admin" role="tab" aria-controls="v-backend-routes-admin" aria-selected="false">Admin</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-routes-posts-tab" data-toggle="pill" href="#v-backend-routes-posts" role="tab" aria-controls="v-backend-routes-posts" aria-selected="false">Posts</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-routes-user-tab" data-toggle="pill" href="#v-backend-routes-user" role="tab" aria-controls="v-backend-routes-user" aria-selected="false">User</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Configurations" labbeledById="headingConfigurationsBackEnd" idNav="configurationsBackEnd" dataParent="backEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-backend-configurations-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-configurations-app-tab" data-toggle="pill" href="#v-backend-configurations-app" role="tab" aria-controls="v-backend-configurations-app" aria-selected="false">App</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-configurations-db-tab" data-toggle="pill" href="#v-backend-configurations-db" role="tab" aria-controls="v-backend-configurations-db" aria-selected="false">DataBase</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-backend-configurations-server-tab" data-toggle="pill" href="#v-backend-configurations-server" role="tab" aria-controls="v-backend-configurations-server" aria-selected="false">Server</a>
                                    </div>
                                </NavAccordion>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border-0">
                    <div class="card-header bg-transparent border-0" id="headingFrontEnd">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed h2" type="button" data-toggle="collapse" data-target="#frontEnd" aria-expanded="false" aria-controls="frontEnd">
                            Front-end
                            </button>
                        </h2>
                    </div>
                    <div id="frontEnd" class="collapse" aria-labelledby="headingFrontEnd" data-parent="#topLevel">
                        <div class="card-body">
                            <div class="accordion" id="frontEndSecondLevel">

                                <NavAccordion name="Components" labbeledById="headingComponents" idNav="components" dataParent="frontEndSecondLevel">
                                    <div class="accordion" id="frontEndThirdLevelComponents">
                                        <NavAccordionThird heading="headingAlert" components="componentsAlert" name="Alert" frontComponent="alert" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-alert-tab" data-toggle="pill" href="#v-frontend-components-alert" role="tab" aria-controls="v-frontend-components-alert" aria-selected="false">Alert</a>
                                        </NavAccordionThird>
                                        <NavAccordionThird heading="headingButton" components="componentsButton" name="Button" frontComponent="button" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-comment-button-tab" data-toggle="pill" href="#v-frontend-components-comment-button" role="tab" aria-controls="v-frontend-components-comment-button" aria-selected="false">CommentButton</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-delete-account-tab" data-toggle="pill" href="#v-frontend-components-delete-account" role="tab" aria-controls="v-frontend-components-delete-account" aria-selected="false">Delete Account</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-dislike-button-tab" data-toggle="pill" href="#v-frontend-components-dislike-button" role="tab" aria-controls="v-frontend-components-dislike-button" aria-selected="false">Dislike Button</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-like-button-tab" data-toggle="pill" href="#v-frontend-components-like-button" role="tab" aria-controls="v-frontend-components-like-button" aria-selected="false">Like Button</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-logout-button-tab" data-toggle="pill" href="#v-frontend-components-logout-button" role="tab" aria-controls="v-frontend-components-logout-button" aria-selected="false">Logout Button</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-modify-banner-tab" data-toggle="pill" href="#v-frontend-components-modify-banner" role="tab" aria-controls="v-frontend-components-modify-banner" aria-selected="false">Modify Banner</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-modify-picture-tab" data-toggle="pill" href="#v-frontend-components-modify-picture" role="tab" aria-controls="v-frontend-components-modify-picture" aria-selected="false">Modify Picture</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-new-post-button-tab" data-toggle="pill" href="#v-frontend-components-new-post-button" role="tab" aria-controls="v-frontend-components-new-post-button" aria-selected="false">New Post Button</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-post-button-tab" data-toggle="pill" href="#v-frontend-components-post-button" role="tab" aria-controls="v-frontend-components-post-button" aria-selected="false">Post Button</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-update-identity-tab" data-toggle="pill" href="#v-frontend-components-update-identity" role="tab" aria-controls="v-frontend-components-update-identity" aria-selected="false">Update Identity</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-update-password-tab" data-toggle="pill" href="#v-frontend-components-update-password" role="tab" aria-controls="v-frontend-components-update-password" aria-selected="false">Update Password</a>
                                        </NavAccordionThird>
                                        <NavAccordionThird heading="headingDropdown" components="componentsDropdown" name="Dropdown" frontComponent="dropdown" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-menu-comment-dropdown-tab" data-toggle="pill" href="#v-frontend-components-menu-comment-dropdown" role="tab" aria-controls="v-frontend-components-menu-comment-dropdown" aria-selected="false">Menu Comment Dropdown</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-menu-post-dropdown-tab" data-toggle="pill" href="#v-frontend-components-menu-post-dropdown" role="tab" aria-controls="v-frontend-components-menu-post-dropdown" aria-selected="false">Menu Post Dropdown</a>
                                        </NavAccordionThird>
                                        <NavAccordionThird heading="headingFormulaire" components="componentsFormulaire" name="Formulaire" frontComponent="formulaire" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-form-post-tab" data-toggle="pill" href="#v-frontend-components-form-post" role="tab" aria-controls="v-frontend-components-form-post" aria-selected="false">FormPost</a>
                                        </NavAccordionThird>
                                        <NavAccordionThird heading="headingNavigation" components="componentsNavigation" name="Navigation" frontComponent="navigation" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-nav-link-tab" data-toggle="pill" href="#v-frontend-components-nav-link" role="tab" aria-controls="v-frontend-components-nav-link" aria-selected="false">NavLink</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-nav-responsive-tab" data-toggle="pill" href="#v-frontend-components-nav-responsive" role="tab" aria-controls="v-frontend-components-nav-responsive" aria-selected="false">NavResponsive</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-nav-user-tab" data-toggle="pill" href="#v-frontend-components-nav-user" role="tab" aria-controls="v-frontend-components-nav-user" aria-selected="false">NavUser</a>
                                        </NavAccordionThird>
                                        <NavAccordionThird heading="headingLayout" components="componentsLayout" name="Layout" frontComponent="layout" dataParent="frontEndThirdLevelComponents">
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-card-comment-tab" data-toggle="pill" href="#v-frontend-components-card-comment" role="tab" aria-controls="v-frontend-components-card-comment" aria-selected="false">CardComment</a>
                                            <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-components-card-post-tab" data-toggle="pill" href="#v-frontend-components-card-post" role="tab" aria-controls="v-frontend-components-card-post" aria-selected="false">CardPost</a>
                                        </NavAccordionThird>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Router" labbeledById="headingRouter" idNav="Router" dataParent="frontEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-frontend-router-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-router-index-tab" data-toggle="pill" href="#v-frontend-router-index" role="tab" aria-controls="v-frontend-router-index" aria-selected="false">Index</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Store" labbeledById="headingStore" idNav="Store" dataParent="frontEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-frontend-store-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-store-index-tab" data-toggle="pill" href="#v-frontend-store-index" role="tab" aria-controls="v-frontend-store-index" aria-selected="false">Index</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Views" labbeledById="headingViews" idNav="Views" dataParent="frontEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-frontend-view-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-accueil-tab" data-toggle="pill" href="#v-frontend-view-accueil" role="tab" aria-controls="v-frontend-view-accueil" aria-selected="false">Accueil</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-login-tab" data-toggle="pill" href="#v-frontend-view-login" role="tab" aria-controls="v-frontend-view-login" aria-selected="false">Login</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-not-found-tab" data-toggle="pill" href="#v-frontend-view-not-found" role="tab" aria-controls="v-frontend-view-not-found" aria-selected="false">NotFound</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-post-tab" data-toggle="pill" href="#v-frontend-view-post" role="tab" aria-controls="v-frontend-view-post" aria-selected="false">Post</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-profil-tab" data-toggle="pill" href="#v-frontend-view-profil" role="tab" aria-controls="v-frontend-view-profil" aria-selected="false">Profil</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-settings-tab" data-toggle="pill" href="#v-frontend-view-settings" role="tab" aria-controls="v-frontend-view-settings" aria-selected="false">Settings</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-view-signup-tab" data-toggle="pill" href="#v-frontend-view-signup" role="tab" aria-controls="v-frontend-view-signup" aria-selected="false">Signup</a>
                                    </div>
                                </NavAccordion>
                                <NavAccordion name="Configurantions" labbeledById="headingConfigurantionsFrontEnd" idNav="configurantionsFrontEnd" dataParent="frontEndSecondLevel">
                                    <div class="nav flex-column nav-pills" id="v-frontend-configurations-tab" role="tablist" aria-orientation="vertical">
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-configurations-app-tab" data-toggle="pill" href="#v-frontend-configurations-app" role="tab" aria-controls="v-frontend-configurations-app" aria-selected="false">App</a>
                                        <a class="nav-link ml-3 border-0 bg-transparent" id="v-frontend-configurations-main-tab" data-toggle="pill" href="#v-frontend-configurations-main" role="tab" aria-controls="v-frontend-configurations-main" aria-selected="false">Main</a>
                                    </div>
                                </NavAccordion>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-transparent border-0">
                    <div class="card-header bg-transparent border-0" id="headingMySQL">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed h2" type="button" data-toggle="collapse" data-target="#MySQL" aria-expanded="false" aria-controls="MySQL">
                                MySQL
                            </button>
                        </h2>
                    </div>

                    <div id="MySQL" class="collapse" aria-labelledby="headingMySQL" data-parent="#topLevel">
                        <div class="card-body">
                            <div class="accordion" id="MySQLSecondLevel">
                                
                                <NavAccordion name="mysql" labbeledById="headingmysql" idNav="mysql" dataParent="structureSecondLevel">
                                    <div class="accordion" id="frontEndThirdLevelComponents">
                                        <NavAccordion name="mysql" labbeledById="headingmysql" idNav="mysql" dataParent="structureSecondLevel">
                                            <div class="nav flex-column nav-pills" id="v-mysql-structure-tab" role="tablist" aria-orientation="vertical">
                                                <a class="nav-link ml-3 border-0 bg-transparent active" id="v-mysql-structure-groupomania-tab" data-toggle="pill" href="#v-mysql-structure-groupomania" role="tab" aria-controls="v-mysql-structure-groupomania" aria-selected="false"></a>
                                            </div>
                                        </NavAccordion>
                                    </div>
                                </NavAccordion>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9">
                <div class="tab-content mx-auto col-12" id="v-pills-tabContent">
                    <!-- structure-1 -->
                    <div class="tab-pane fade show active" id="visuel-structure-groupomania" role="tabpanel" aria-labelledby="v-backend-controller-admin-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Structure - Groupomania</h3>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<figure class="code__strcuture">
    <pre><code class="text-white">
        groupomania/
        |--> back-end/
        |     |--> controller/
        |     |     |--> <Gre>admin.js</Gre>
        |     |     |--> <Gre>posts.js</Gre>
        |     |     |--> <Gre>user.js</Gre>
        |     |
        |     |--> db/
        |     |     |--> Table/
        |     |     |      |--> <Gre>Comments.sql</Gre>
        |     |     |      |--> <Gre>Dislikes.sql</Gre>
        |     |     |      |--> <Gre>Likes.sql</Gre>
        |     |     |      |--> <Gre>Permission.sql</Gre>
        |     |     |      |--> <Gre>Posts.sql</Gre>
        |     |     |      |--> <Gre>Users.sql</Gre>
        |     |     |
        |     |     |--> Table/
        |     |
        |     |--> images/
        |     |     |--> user/
        |     |            |--> avatar
        |     |            |--> banner
        |     |
        |     |--> middleware/
        |     |     |--> <Gre>auth.js</Gre>
        |     |     |--> <Gre>multer-avatar.js</Gre>
        |     |     |--> <Gre>multer-banner.js</Gre>
        |     |     |--> <Gre>multer-config.js</Gre>
        |     |
        |     |--> routes/
        |           |--> <Gre>Admin.js</Gre>
        |           |--> <Gre>Posts.js</Gre>
        |           |--> <Gre>User.js</Gre>
        |
        |--> nodes_modules/
        |--> public/
        |     |--> <Gre>favicon.ico</Gre>
        |     |--> <Gre>index.html</Gre>
        |
        |--> src/
        |     |--> assets/
        |     |     |--> icons/
        |     |
        |     |--> components/
        |     |     |--> Alert/
        |     |     |      |--> <Gre>Alert.vue</Gre>
        |     |     |
        |     |     |--> Button/
        |     |     |      |--> <Gre>CommentButton.vue</Gre>
        |     |     |      |--> <Gre>DeleteButton.vue</Gre>
        |     |     |      |--> <Gre>DislikeButton.vue</Gre>
        |     |     |      |--> <Gre>LikeButton.vue</Gre>
        |     |     |      |--> <Gre>LogoutButton.vue</Gre>
        |     |     |      |--> <Gre>ModifyBanner.vue</Gre>
        |     |     |      |--> <Gre>ModifyPicture.vue</Gre>
        |     |     |      |--> <Gre>NewPostButton.vue</Gre>
        |     |     |      |--> <Gre>NewPostButtonResponsive.vue</Gre>
        |     |     |      |--> <Gre>PostButton.vue</Gre>
        |     |     |      |--> <Gre>UpdateIdentity.vue</Gre>
        |     |     |      |--> <Gre>updatePassword.vue</Gre>
        |     |     |
        |     |     |--> Dropdown/
        |     |     |      |--> <Gre>MenuCommentDropdown.vue</Gre>
        |     |     |      |--> <Gre>MenuPostDropdown.vue</Gre>
        |     |     |
        |     |     |--> Formulaire/
        |     |     |      |--> <Gre>FormPost.vue</Gre>
        |     |     |
        |     |     |--> Navigation/
        |     |     |      |--> <Gre>NavLink.vue</Gre>
        |     |     |      |--> <Gre>NavResponsive.vue</Gre>
        |     |     |      |--> <Gre>NavUser.vue</Gre>
        |     |     |
        |     |     |--> <Gre>CardComment.vue</Gre>
        |     |     |--> <Gre>CardPost.vue</Gre>
        |     |
        |     |--> router/
        |     |     |--> <Gre>index.js</Gre>
        |     |
        |     |--> store/
        |     |     |--> <Gre>index.js</Gre>
        |     |
        |     |--> views/
        |     |     |--> <Gre>Accueil.vue</Gre>
        |     |     |--> <Gre>Analyse.vue</Gre>
        |     |     |--> <Gre>Login.vue</Gre>
        |     |     |--> <Gre>NotFound.vue</Gre>
        |     |     |--> <Gre>Post.vue</Gre>
        |     |     |--> <Gre>Settings.vue</Gre>
        |     |     |--> <Gre>Signup.vue</Gre>
        |     |
        |     |--> <Gre>App.vue</Gre>
        |     |--> <Gre>main.js</Gre>
        |
        |--> <Gre>.gitignore</Gre>
        |--> <Gre>babel.config.js</Gre>
        |--> <Gre>package-lock.json</Gre>
        |--> <Gre>package.json</Gre>
        |--> <Gre>README.md</Gre>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-1 -->
                    <div class="tab-pane fade" id="v-backend-controller-admin" role="tabpanel" aria-labelledby="v-backend-controller-admin-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Controller - Admin</h3>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">isAdmin</h4>
<p class="code_path">~/backend/controller/admin</p>
<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>isAdmin</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"GET"</Ora> ) {
            <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;
            <Yel>let</Yel> <Pur>reqIsAdmin</Pur> = <Ora>"SELECT Users.user_permission FROM Users WHERE id = '"</Ora> <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> <Ora>"'"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqIsAdmin</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({<Blu>result</Blu>})
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({<Blu>erreur</Blu> : <Ora>"Une erreur est survenue..."</Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-2 -->
                    <div class="tab-pane fade" id="v-backend-controller-posts" role="tabpanel" aria-labelledby="v-backend-controller-posts-tab">

                        <div class="header mb-5">
                            <h3 class="text-white display-4">Controller - Posts</h3>
                            <p class="code_path">~/backend/controller/posts</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">createPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>createPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"POST"</Ora> ) {
            <Yel>let</Yel> <Pur>content</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Pur>content</Pur>;
            <Yel>let</Yel> <Pur>imageUrl</Pur> = <Ora>`</Ora><Gre>${</Gre><Pur>req</Pur>.<Pur>protocol</Pur><Gre>}</Gre><Ora>://</Ora><Gre>${</Gre><Pur>req</Pur>.<Blu>get</Blu>(<Ora>'host'</Ora>)<Gre>}</Gre><Ora>/images/</Ora><Gre>${</Gre><Pur>req</Pur>.<Pur>file</Pur>.<Pur>filename</Pur><Gre>}</Gre><Ora>`</Ora>;
            <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Blu>user_id</Blu>;

            <Yel>let</Yel> <Pur>reqCreatePost</Pur> = <Ora>"INSERT INTO Posts (content, imageUrl, post_create, user_id) <Blu>\</Blu>
                VALUES ('"</Ora> <Yel>+</Yel> <Pur>content</Pur> <Yel>+</Yel> <Ora>"', '"</Ora> <Yel>+</Yel> <Pur>imageUrl</Pur> <Yel>+</Yel> <Ora>"', NOW(), '"</Ora> <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> <Ora>"')"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqCreatePost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> })
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>err</Blu> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">getAllPosts</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>getAllPosts</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"GET"</Ora> ) {
            <Yel>let</Yel> <Pur>allPostReq</Pur> = <Ora>"SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser <Blu>\</Blu>
                FROM Posts <Blu>\</Blu>
                INNER JOIN Users <Blu>\</Blu>
                ON Posts.user_id = Users.id <Blu>\</Blu>
                ORDER BY post_create <Blu>\</Blu>
                DESC"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>allPostReq</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>.<Pur>length</Pur> <Yel>></Yel> <Blu>0</Blu>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> })
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>204</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Aucun post a été trouvé !"</Ora> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">getOnePost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>getOnePost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"GET"</Ora> ) {
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;
            <Yel>let</Yel> <Pur>onePost</Pur> = <Ora>"SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser <Blu>\</Blu>
                FROM Posts <Blu>\</Blu>
                INNER JOIN Users <Blu>\</Blu>
                ON Posts.user_id = Users.id <Blu>\</Blu>
                WHERE Posts.id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "'"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>onePost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>.<Pur>length</Pur> <Yel>></Yel> <Blu>0</Blu>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> })
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>204</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue..."</Ora> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">getPostsOfCurrentUser</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>isAdmin</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"GET"</Ora> ) {
            <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;
            <Yel>let</Yel> <Pur>getPostsOfCurrentUser</Pur> = <Ora>"SELECT Posts.id, Posts.content, Posts.imageUrl, Posts.likes_number, Posts.dislikes_number, DATE_FORMAT(Posts.post_create, '%d %b. %y - %kh%i') AS post_create, Posts.user_id, Posts.comments_number, Users.first_name, Users.last_name, Users.imageUser <Blu>\</Blu>
                FROM Posts <Blu>\</Blu>
                INNER JOIN Users ON Posts.user_id = Users.id <Blu>\</Blu>
                WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel>"' <Blu>\</Blu>
                ORDER BY post_create DESC"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>getPostsOfCurrentUser</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>.<Pur>length</Pur> <Yel>></Yel> <Blu>0</Blu>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({<Blu>result</Blu>})
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>204</Blu>).<Blu>json</Blu>({<Blu>message</Blu> : <Ora>"L'utilisateur n'a aucun post !"</Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">modifyPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>modifyPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"PUT"</Ora> ) {
            <Yel>let</Yel> <Pur>editContent</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Pur>content</Pur>;
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;

            <Yel>let</Yel> <Pur>modifyReqContent</Pur> = <Ora>"UPDATE Posts <Blu>\</Blu>
            SET content = '" <Yel>+</Yel> <Pur>editContent</Pur> <Yel>+</Yel> "' <Blu>\</Blu>
            WHERE id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "'"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>modifyReqContent</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> : <Ora>"Le post a bien été modifié !"</Ora> })
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({<Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">deletePost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>deletePost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"DELETE"</Ora> ) {
            <Yel>let</Yel> <Pur>post_id</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;
            <Yel>let</Yel> <Pur>reqFile</Pur> = <Ora>"SELECT Posts.imageUrl <Blu>\</Blu>
                FROM Posts <Blu>\</Blu>
                WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqFile</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Yel>const</Yel> <Pur>filename</Pur> = <Pur>result</Pur>[<Blu>0</Blu>].<Pur>imageUrl</Pur>.<Blu>split</Blu>(<Ora>'/images/'</Ora>)[<Blu>1</Blu>];
                    <Pur>fs</Pur>.<Blu>unlink</Blu>(<Ora>`images/<Gre>${<Pur>filename</Pur>}</Gre>`</Ora>, () <Yel>=></Yel> {
                        <Yel>let</Yel> <Pur>reqDeletePost</Pur> = <Ora>"DELETE FROM Posts WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'"</Ora>;
                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqDeletePost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le post a bien été supprimé !"</Ora> })
                            } <Yel>else</Yel> {
                                <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>erreur</Blu>({<Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                            }
                        }
                    })
                } <Yel>else</Yel> {
                    <Yel>return</Yel> <Pur>res</Pur>.<Blu>json</Blu>({ <Blu>err</Blu> })
                }

            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">likePost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>likePost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"POST"</Ora> ) {
            <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Blu>user_id</Blu>;
            <Yel>let</Yel> <Pur>post_id</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;

            <Yel>let</Yel> <Pur>ifExists</Pur> = <Blu>\</Blu>
            <Ora>"SELECT IF (EXISTS (SELECT * FROM Likes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel>"'), '1', '0') <Blu>\</Blu>
            UNION ALL <Blu>\</Blu>
            SELECT IF (EXISTS (SELECT * FROM Unlikes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel>"'), '1', '0')"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>ifExists</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {

                <Yel>var</Yel> <Pur>valueOne</Pur> = <Blu>parseInt</Blu>(<Red>Object</Red>.<Blu>values</Blu>(<Pur>result</Pur>[<Blu>0</Blu>]))
                <Yel>var</Yel> <Pur>valueTwo</Pur> = <Blu>parseInt</Blu>(<Red>Object</Red>.<Blu>values</Blu>(<Pur>result</Pur>[<Blu>1</Blu>]))

                <Yel>switch</Yel> (<Pur>valueOne</Pur>) {
                    <Yel>case</Yel> <Blu>0</Blu> :
                        <Yel>let</Yel> <Pur>addLike</Pur> = <Ora>" <Blu>\</Blu>
                        INSERT INTO Likes (user_id, post_id) VALUES ('" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "', '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'); <Blu>\</Blu>
                        UPDATE Posts SET likes_number = likes_number +1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'"</Ora>;

                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>addLike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                <Yel>switch</Yel> (<Pur>valueTwo</Pur>) {
                                    <Yel>case</Yel> <Blu>0</Blu> :
                                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le post a bien été liké !"</Ora> })
                                        <Yel>break</Yel> 
                                    <Yel>case</Yel> <Blu>1</Blu> :
                                        <Yel>let</Yel> <Pur>addLikeAndRemoveDislike</Pur> = <Ora>" <Blu>\</Blu>
                                        DELETE FROM Unlikes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'; <Blu>\</Blu>
                                        UPDATE Posts SET dislikes_number = dislikes_number -1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'" </Ora>
                                        
                                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>addLikeAndRemoveDislike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le dislike du post a bien été supprimé !"</Ora> })
                                            } <Yel>else</Yel> {
                                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                                            }
                                        <Yel>break</Yel> 
                                    <Yel>default</Yel> :
                                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue dans le cas 0 du switch !"</Ora> })
                                }
                            } <Yel>else</Yel> {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                            }
                        })
                        <Yel>break</Yel> ;
                    <Yel>case</Yel> <Blu>1</Blu> :
                        <Yel>let</Yel> <Pur>removeLike</Pur> = <Ora>" <Blu>\</Blu>
                        DELETE FROM Likes WHERE user_id  = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'; <Blu>\</Blu>
                        UPDATE Posts SET likes_number = likes_number -1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'" </Ora>
                        
                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>removeLike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le like a était retirer du post !"</Ora> })
                            } <Yel>else</Yel> {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                            }
                        <Yel>break</Yel> 
                    <Yel>default</Yel> :
                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">dislikePost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>dislikePost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"POST"</Ora> ) {
            <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Blu>user_id</Blu>;
            <Yel>let</Yel> <Pur>post_id</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Pur>id</Pur>;

            <Yel>let</Yel> <Pur>ifExists</Pur> = <Blu>\</Blu>
            <Ora>"SELECT IF (EXISTS (SELECT * FROM Unlikes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel>"'), '1', '0') <Blu>\</Blu>
            UNION ALL <Blu>\</Blu>
            SELECT IF (EXISTS (SELECT * FROM Likes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel>"'), '1', '0')"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>ifExists</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {

                <Yel>var</Yel> <Pur>valueOne</Pur> = <Blu>parseInt</Blu>(<Red>Object</Red>.<Blu>values</Blu>(<Pur>result</Pur>[<Blu>0</Blu>]))
                <Yel>var</Yel> <Pur>valueTwo</Pur> = <Blu>parseInt</Blu>(<Red>Object</Red>.<Blu>values</Blu>(<Pur>result</Pur>[<Blu>1</Blu>]))

                <Yel>switch</Yel> (<Pur>valueOne</Pur>) {
                    <Yel>case</Yel> <Blu>0</Blu> :
                        <Yel>let</Yel> <Pur>addUnlike</Pur> = <Ora>" <Blu>\</Blu>
                        INSERT INTO Unlikes (user_id, post_id) VALUES ('" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "', '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'); <Blu>\</Blu>
                        UPDATE Posts SET dislikes_number = dislikes_number +1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'"</Ora>;

                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>addUnlike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                <Yel>switch</Yel> (<Pur>valueTwo</Pur>) {
                                    <Yel>case</Yel> <Blu>0</Blu> :
                                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le post a bien été disliké !"</Ora> })
                                        <Yel>break</Yel> 
                                    <Yel>case</Yel> <Blu>1</Blu> :
                                        <Yel>let</Yel> <Pur>addUnlikeAndRemoveLike</Pur> = <Ora>" <Blu>\</Blu>
                                        DELETE FROM Likes WHERE user_id = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'; <Blu>\</Blu>
                                        UPDATE Posts SET likes_number = likes_number -1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'" </Ora>
                                        
                                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>addUnlikeAndRemoveLike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le like du post a bien été supprimé !"</Ora> })
                                            } <Yel>else</Yel> {
                                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                                            }
                                        <Yel>break</Yel> 
                                    <Yel>default</Yel> :
                                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue dans le cas 0 du switch !"</Ora> })
                                }
                            } <Yel>else</Yel> {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                            }
                        })
                        <Yel>break</Yel> ;
                    <Yel>case</Yel> <Blu>1</Blu> :
                        <Yel>let</Yel> <Pur>removeUnlike</Pur> = <Ora>" <Blu>\</Blu>
                        DELETE FROM Unlikes WHERE user_id  = '" <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'; <Blu>\</Blu>
                        UPDATE Posts SET dislikes_number = dislikes_number -1 WHERE id = '" <Yel>+</Yel> <Pur>post_id</Pur> <Yel>+</Yel> "'" </Ora>
                        
                        <Pur>db</Pur>.<Blu>query</Blu>(<Pur>removeLike</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                            <Yel>if</Yel>(<Pur>result</Pur>) {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le dislike a était retirer du post !"</Ora> })
                            } <Yel>else</Yel> {
                                <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                            }
                        <Yel>break</Yel> 
                    <Yel>default</Yel> :
                        <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">commentPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>commentPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"POST"</Ora> ) {
            <Yel>let</Yel> <Pur>content</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Pur>content</Pur>;
            <Yel>let</Yel> <Pur>userId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>userId</Blu>;
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>postId</Blu>;

            <Yel>let</Yel> <Pur>reqCommentPost</Pur> = <Ora>"INSERT INTO Comments (comment, comment_create, user_id, post_id) <Blu>\</Blu>
                VALUES ("' <Yel>+</Yel> <Pur>content</Pur> <Yel>+</Yel> '", NOW(), "' <Yel>+</Yel> <Pur>userid</Pur> <Yel>+</Yel> '", "' <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> '"); <Blu>\</Blu>
                UPDATE Posts <Blu>\</Blu>
                SET comments_number = comments_number+1 <Blu>\</Blu>
                WHERE id = "' <Yel>+</Yel> <Pur>user_id</Pur> <Yel>+</Yel> '";'</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqCommentPost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le commentaire a bien été posté !" </Ora>})
                } <Yel>else</Yel> {
                    <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !" </Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">modifyCommentPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>modifyCommentPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"PUT"</Ora> ) {
            <Yel>let</Yel> <Pur>content</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Pur>content</Pur>;
            <Yel>let</Yel> <Pur>userId</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Blu>userId</Blu>;
            <Yel>let</Yel> <Pur>idComment</Pur> = <Pur>req</Pur>.<Pur>body</Pur>.<Blu>idComment</Blu>;
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>postId</Blu>;


            <Yel>let</Yel> <Pur>reqModifyComment</Pur> = <Ora>"UPDATE Comments SET comment = '" <Yel>+</Yel> <Pur>content</Pur> <Yel>+</Yel> "', edit_at = NOW() <Blu>\</Blu>
            WHERE user_id = '" <Yel>+</Yel> <Pur>userId</Pur> <Yel>+</Yel> "' <Blu>\</Blu>
            AND id = '" <Yel>+</Yel> <Pur>idComment</Pur> <Yel>+</Yel> "' <Blu>\</Blu>
            AND post_id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "';"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqModifyComment</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Le commentaire a bien été modifié !" </Ora>})
                } <Yel>else</Yel> {
                    <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !" </Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">deleteCommentPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>deleteCommentPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"DELETE"</Ora> ) {
            <Yel>let</Yel> <Pur>idComment</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>idComment</Blu>;
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>postId</Blu>;

            <Yel>let</Yel> <Pur>reqDeletePost</Pur> = <Ora>"DELETE FROM Comments WHERE id = '" <Yel>+</Yel> <Pur>idComment</Pur> <Yel>+</Yel> "' AND post_id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "' <Blu>\</Blu>
            UPDATE Posts SET comments_number = comments_number -1 WHERE id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "'"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqDeletePost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Pur>result</Pur>) {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> : <Ora>"Le commentaire a bien été supprimé !"</Ora>  })
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>403</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Une erreur est survenue !"</Ora> })
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">getAllCommentOfPost</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Red>exports</Red>.<Blu>getAllCommentOfPost</Blu> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>)  <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>req</Pur>.<Pur>method</Pur> <Yel>==</Yel> <Ora>"GET"</Ora> ) {
            <Yel>let</Yel> <Pur>postId</Pur> = <Pur>req</Pur>.<Pur>params</Pur>.<Blu>postId</Blu>;

            <Yel>let</Yel> <Pur>reqIfResponse</Pur> = <Ora>"SELECT IF ( EXISTS ( SELECT * FROM Comments WHERE post_id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "'), 'true', 'false')"</Ora>;

            <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqIfResponse</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                <Yel>if</Yel>(<Red>result</Red>.<Blu>values</Blu>(<Pur>result</Pur>[<Blu>0</Blu>]) <Yel>==</Yel> <Ora>'true'</Ora>) {
                    <Yel>let</Yel> <Pur>reqGetAllCommentOfPost</Pur> = <Ora>"SELECT Posts.id, Posts.comments_number, Comments.id as comment_id, Comments.comment, DATE_FORMAT(Comments.comment_create, '%d %b. %y - %kh%i') AS comment_create, Comments.user_id, Comments.post_id, Comments.edit_at, Users.first_name, Users.last_name, Users.imageUser <Blu>\</Blu>
                    FROM Posts <Blu>\</Blu>
                    INNER JOIN Comments <Blu>\</Blu>
                    ON Posts.id = Comments.post_id <Blu>\</Blu>
                    INNER JOIN Users <Blu>\</Blu>
                    ON Comments.user_id = Users.id <Blu>\</Blu>
                    WHERE Posts.id = '" <Yel>+</Yel> <Pur>postId</Pur> <Yel>+</Yel> "' <Blu>\</Blu>
                    AND Posts.comments_number > 0 <Blu>\</Blu>
                    ORDER BY Comments.comment_create <Blu>\</Blu>
                    DESC"</Ora>;
                    <Pur>db</Pur>.<Blu>query</Blu>(<Pur>reqGetAllCommentOfPost</Pur>, <Yel>function</Yel>(<Pur>err</Pur>, <Pur>result</Pur>) {
                        <Yel>if</Yel>(<Red>result</Red>) {
                            <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>200</Blu>).<Blu>json</Blu>({ <Blu>result</Blu> })
                        } <Yel>else</Yel> {
                            <Yel>return</Yel> <Pur>res</Pur>.<Blu>status</Blu>(<Blu>404</Blu>).<Blu>json</Blu>({ <Blu>erreur</Blu> : <Ora>'Une erreur est survenue !'</Ora>})
                        }
                    }
                } <Yel>else</Yel> {
                    <Pur>res</Pur>.<Blu>status</Blu>(<Blu>203</Blu>).<Blu>json</Blu>({ <Blu>message</Blu> : <Ora>"Aucun commentaire n'a été trouvé !"</Ora>})
                }
            })
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-3 -->
                    <div class="tab-pane fade" id="v-backend-controller-user" role="tabpanel" aria-labelledby="v-backend-controller-user-tab">
                        Users
                    </div>
                    <!-- backend-4 -->
                    <div class="tab-pane fade" id="v-backend-middleware-auth" role="tabpanel" aria-labelledby="v-backend-middleware-auth-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Middleware - Admin</h3>
                            <p class="code_path">~/backend/middleware/auth</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Auth</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>jwt</Pur> = <Blu>require</Blu>(<Ora>'jsonwebtoken'</Ora>);

    <Red>module</Red>.<Red>exports</Red> = (<Pur>req</Pur>, <Pur>res</Pur>, <Pur>next</Pur>) <Yel>=></Yel> {
        <Yel>try</Yel> {
            <Yel>const</Yel> <Pur>token</Pur> = <Pur>req</Pur>.<Pur>headers</Pur>.<Pur>authorization</Pur>.<Blu>split</Blu>(<Ora>' '</Ora>)[<Blu>1</Blu>]
            <Yel>const</Yel> <Pur>decodedToken</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Pur>process</Pur>.<Blu>env</Blu>.<Blu>SECRET_TOKEN</Blu>);
            <Yel>const</Yel> <Pur>userId</Pur> = <Pur>decodedToken</Pur>.<Blu>userId</Blu>;
            <Yel>if</Yel> (<Pur>req</Pur>.<Pur>body</Pur>.<Blu>userId</Blu> <Yel>!==</Yel> <Pur>userId</Pur>) {
                <Yel>throw</Yel> <Ora>'User ID non valable'</Ora>;
            } <Yel>else</Yel> {
                <Blu>next</Blu>()
            }
        } <Yel>catch</Yel> (<Pur>error</Pur>) {
            <Yel>res</Yel>.<Blu>status</Blu>(<Blu>401</Blu>).<Blu>json</Blu>({ <Blu>error</Blu> : <Pur>error</Pur> <Yel>|</Yel> <Ora>Requête non authentifiée !</Ora>})
        }
    }
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-5 -->
                    <div class="tab-pane fade" id="v-backend-middleware-multer-avatar" role="tabpanel" aria-labelledby="v-backend-middleware-multer-avatar-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Middleware - Multer Avatar</h3>
                            <p class="code_path">~/backend/middleware/multer-avatar</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Multer Avatar</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>multer</Pur> = <Blu>require</Blu>(<Ora>'multer'</Ora>)


    <Yel>const</Yel> <Pur>MIME_TYPES</Pur> = {
        <Ora>'image/jpg'</Ora>: <Ora>'jpg'</Ora>,
        <Ora>'image/jpeg'</Ora>: <Ora>'jpeg'</Ora>,
        <Ora>'image/png'</Ora>: <Ora>'png'</Ora>,
        <Ora>'image/gif'</Ora>: <Ora>'gif'</Ora>
    }

    <Yel>const</Yel> <Pur>storage</Pur> = <Pur>multer</Pur>.<Blu>diskStorage</Blu>({
        <Blu>destination</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Blu>callback</Blu>(<Sau>null</Sau>, <Ora>'images/user/avatar'</Ora>);
        },
        <Blu>filename</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Yel>const</Yel> <Pur>name</Pur> = <Pur>file</Pur>.<Blu>originalname</Blu>.<Blu>split</Blu>(<Ora>' '</Ora>).<Blu>join</Blu>(<Ora>'_'</Ora>)
            <Yel>const</Yel> <Pur>extension</Pur> = <Pur>MIME_TYPES</Pur>[<Pur>file</Pur>.<Blu>mimetype</Blu>];
            <Blu>callback</Blu>(<Sau>null</Sau>, <Pur>name</Pur> <Yel>+</Yel> <Red>Date</Red>.<Blu>now</Blu>() <Yel>+</Yel> <Ora>'.'</Ora> <Yel>+</Yel> <Pur>extension</Pur>);
        }
    })

    <Red>module</Red>.<Red>exports</Red> = <Blu>multer</Blu>({ <Blu>storage</Blu>, <Pur>storage</Pur>}).<Blu>single</Blu>.(<Ora>'image'</Ora>);
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-6 -->
                    <div class="tab-pane fade" id="v-backend-middleware-multer-banner" role="tabpanel" aria-labelledby="v-backend-middleware-multer-banner-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Middleware - Multer Banner</h3>
                            <p class="code_path">~/backend/middleware/multer-banner</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Multer Banner</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>multer</Pur> = <Blu>require</Blu>(<Ora>'multer'</Ora>)


    <Yel>const</Yel> <Pur>MIME_TYPES</Pur> = {
        <Ora>'image/jpg'</Ora>: <Ora>'jpg'</Ora>,
        <Ora>'image/jpeg'</Ora>: <Ora>'jpeg'</Ora>,
        <Ora>'image/png'</Ora>: <Ora>'png'</Ora>,
        <Ora>'image/gif'</Ora>: <Ora>'gif'</Ora>
    }

    <Yel>const</Yel> <Pur>storage</Pur> = <Pur>multer</Pur>.<Blu>diskStorage</Blu>({
        <Blu>destination</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Blu>callback</Blu>(<Sau>null</Sau>, <Ora>'images/user/banner'</Ora>);
        },
        <Blu>filename</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Yel>const</Yel> <Pur>name</Pur> = <Pur>file</Pur>.<Blu>originalname</Blu>.<Blu>split</Blu>(<Ora>' '</Ora>).<Blu>join</Blu>(<Ora>'_'</Ora>)
            <Yel>const</Yel> <Pur>extension</Pur> = <Pur>MIME_TYPES</Pur>[<Pur>file</Pur>.<Blu>mimetype</Blu>];
            <Blu>callback</Blu>(<Sau>null</Sau>, <Pur>name</Pur> <Yel>+</Yel> <Red>Date</Red>.<Blu>now</Blu>() <Yel>+</Yel> <Ora>'.'</Ora> <Yel>+</Yel> <Pur>extension</Pur>);
        }
    })

    <Red>module</Red>.<Red>exports</Red> = <Blu>multer</Blu>({ <Blu>storage</Blu>, <Pur>storage</Pur>}).<Blu>single</Blu>.(<Ora>'image'</Ora>);
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-7 -->
                    <div class="tab-pane fade" id="v-backend-middleware-multer-config" role="tabpanel" aria-labelledby="v-backend-middleware-multer-config-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Middleware - Multer Config</h3>
                            <p class="code_path">~/backend/middleware/multer-config</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Multer Config</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>multer</Pur> = <Blu>require</Blu>(<Ora>'multer'</Ora>)


    <Yel>const</Yel> <Pur>MIME_TYPES</Pur> = {
        <Ora>'image/jpg'</Ora>: <Ora>'jpg'</Ora>,
        <Ora>'image/jpeg'</Ora>: <Ora>'jpeg'</Ora>,
        <Ora>'image/png'</Ora>: <Ora>'png'</Ora>,
        <Ora>'image/gif'</Ora>: <Ora>'gif'</Ora>
    }

    <Yel>const</Yel> <Pur>storage</Pur> = <Pur>multer</Pur>.<Blu>diskStorage</Blu>({
        <Blu>destination</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Blu>callback</Blu>(<Sau>null</Sau>, <Ora>'images'</Ora>);
        },
        <Blu>filename</Blu>: (<Pur>req</Pur>, <Pur>file</Pur>, <Blu>callback</Blu>) <Yel>=></Yel> {
            <Yel>const</Yel> <Pur>name</Pur> = <Pur>file</Pur>.<Blu>originalname</Blu>.<Blu>split</Blu>(<Ora>' '</Ora>).<Blu>join</Blu>(<Ora>'_'</Ora>)
            <Yel>const</Yel> <Pur>extension</Pur> = <Pur>MIME_TYPES</Pur>[<Pur>file</Pur>.<Blu>mimetype</Blu>];
            <Blu>callback</Blu>(<Sau>null</Sau>, <Pur>name</Pur> <Yel>+</Yel> <Red>Date</Red>.<Blu>now</Blu>() <Yel>+</Yel> <Ora>'.'</Ora> <Yel>+</Yel> <Pur>extension</Pur>);
        }
    })

    <Red>module</Red>.<Red>exports</Red> = <Blu>multer</Blu>({ <Blu>storage</Blu>, <Pur>storage</Pur>}).<Blu>single</Blu>.(<Ora>'image'</Ora>);
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-8 -->
                    <div class="tab-pane fade" id="v-backend-routes-admin" role="tabpanel" aria-labelledby="v-backend-routes-admin-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Routes - Admin</h3>
                            <p class="code_path">~/backend/routes/Admin</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Admin</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>express</Pur> = <Blu>require</Blu>(<Ora>'express'</Ora>)
    <Yel>const</Yel> <Blu>auth</Blu> = <Blu>require</Blu>(<Ora>'../middleware/auth'</Ora>)
    <Yel>const</Yel> <Pur>router</Pur> = <Pur>express</Pur>.<Blu>Router</Blu>();

    <Yel>const</Yel> <Pur>adminCtrl</Pur> = <Blu>require</Blu>(<Ora>'../controller/admin'</Ora>);

    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/:id'</Ora>, <Blu>auth</Blu>, .<Pur>adminCtrl</Pur>.<Blu>isAdmin</Blu>)

    <Pur>module</Pur>.<Pur>exports</Pur> = <Pur>router</Pur>

    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-9 -->
                    <div class="tab-pane fade" id="v-backend-routes-posts" role="tabpanel" aria-labelledby="v-backend-routes-posts-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Routes - Posts</h3>
                            <p class="code_path">~/backend/routes/Posts</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Posts</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>express</Pur> = <Blu>require</Blu>(<Ora>'express'</Ora>)
    <Yel>const</Yel> <Blu>auth</Blu> = <Blu>require</Blu>(<Ora>'../middleware/auth'</Ora>)
    <Yel>const</Yel> <Blu>multer</Blu> = <Blu>require</Blu>(<Ora>'../middleware/multer-config'</Ora>)
    <Yel>const</Yel> <Pur>router</Pur> = <Pur>express</Pur>.<Blu>Router</Blu>();

    <Yel>const</Yel> <Pur>postCtrl</Pur> = <Blu>require</Blu>(<Ora>'../controller/posts'</Ora>);

    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/'</Ora>, <Blu>auth</Blu>, <Blu>multer</Blu>, <Pur>postCtrl</Pur>.<Blu>createPost</Blu>)
    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>getAllPosts</Blu>)
    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/profil/:id'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>getPostsOfCurrentUser</Blu>)
    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/:id'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>getOnePost</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/:id'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>modifyPost</Blu>)
    <Pur>router</Pur>.<Blu>delete</Blu>(<Ora>'/:id'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>deletePost</Blu>)
    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/:id/like'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>likePost</Blu>)
    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/:id/dislike'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>dislikePost</Blu>)
    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/:postId/comment'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>getAllCommentOfPost</Blu>)
    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/:postId/comment'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>commentPost</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/:postId/comment/:idComment'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>modifyCommentPost</Blu>)
    <Pur>router</Pur>.<Blu>delete</Blu>(<Ora>'/:postId/comment/:idComment'</Ora>, <Blu>auth</Blu>, <Pur>postCtrl</Pur>.<Blu>deleteCommentPost</Blu>)

    <Pur>module</Pur>.<Pur>exports</Pur> = <Pur>router</Pur>

    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-10 -->
                    <div class="tab-pane fade" id="v-backend-routes-user" role="tabpanel" aria-labelledby="v-backend-routes-user-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Routes - Users</h3>
                            <p class="code_path">~/backend/routes/Users</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Users</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>express</Pur> = <Blu>require</Blu>(<Ora>'express'</Ora>)
    <Yel>const</Yel> <Blu>auth</Blu> = <Blu>require</Blu>(<Ora>'../middleware/auth'</Ora>)
    <Yel>const</Yel> <Blu>multer_banner</Blu> = <Blu>require</Blu>(<Ora>'../middleware/multer-banner'</Ora>)
    <Yel>const</Yel> <Blu>multer_avatar</Blu> = <Blu>require</Blu>(<Ora>'../middleware/multer-avatar'</Ora>)
    <Yel>const</Yel> <Pur>router</Pur> = <Pur>express</Pur>.<Blu>Router</Blu>();

    <Yel>const</Yel> <Pur>userCtrl</Pur> = <Blu>require</Blu>(<Ora>'../controller/user'</Ora>);

    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/auth/signup'</Ora>, <Pur>userCtrl</Pur>.<Blu>signup</Blu>)
    <Pur>router</Pur>.<Blu>post</Blu>(<Ora>'/auth/login'</Ora>, <Pur>userCtrl</Pur>.<Blu>login</Blu>)
    <Pur>router</Pur>.<Blu>delete</Blu>(<Ora>'/user/:id'</Ora>, <Blu>auth</Blu>, <Pur>userCtrl</Pur>.<Blu>deleteUser</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/user/identity/:id'</Ora>, <Blu>auth</Blu>, <Pur>userCtrl</Pur>.<Blu>updateIdentity</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/user/password/:id'</Ora>, <Blu>auth</Blu>, <Pur>userCtrl</Pur>.<Blu>updatePassword</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/user/avatar/:id'</Ora>, <Blu>auth</Blu>, <Blu>multer_avatar</Blu>, <Pur>userCtrl</Pur>.<Blu>updatePicture</Blu>)
    <Pur>router</Pur>.<Blu>put</Blu>(<Ora>'/user/banner/:id'</Ora>, <Blu>auth</Blu>, <Blu>multer_banner</Blu>, <Pur>userCtrl</Pur>.<Blu>updateBanner</Blu>)
    <Pur>router</Pur>.<Blu>get</Blu>(<Ora>'/user/profil/:id'</Ora>, <Blu>auth</Blu>, <Pur>userCtrl</Pur>.<Blu>getUser</Blu>)

    <Pur>module</Pur>.<Pur>exports</Pur> = <Pur>router</Pur>

    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-11 -->
                    <div class="tab-pane fade" id="v-backend-configurations-app" role="tabpanel" aria-labelledby="v-backend-configurations-app-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Configurations - App</h3>
                            <p class="code_path">~/backend/app</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">App</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>express</Pur> = <Blu>require</Blu>(<Ora>'express'</Ora>);
    <Yel>const</Yel> <Pur>app</Pur> = <Blu>express</Blu>();
    <Yel>const</Yel> <Pur>bodyParser</Pur> = <Blu>require</Blu>(<Ora>'body-parser'</Ora>)
    <Yel>const</Yel> <Pur>path</Pur> = <Blu>require</Blu>(<Ora>'path'</Ora>)
    <Yel>const</Yel> <Blu>expressSanitizer</Blu> = <Blu>require</Blu>(<Ora>'express-sanitizer'</Ora>)
    <Yel>const</Yel> <Pur>helmet</Pur> = <Blu>require</Blu>(<Ora>'helmet'</Ora>);

    <Yel>const</Yel> <Pur>userRoutes</Pur> = <Blu>require</Blu>(<Ora>'./routes/Users'</Ora>);
    <Yel>const</Yel> <Pur>postsRoutes</Pur> = <Blu>require</Blu>(<Ora>'./routes/Posts'</Ora>);
    <Yel>const</Yel> <Pur>adminRoutes</Pur> = <Blu>require</Blu>(<Ora>'./routes/Admin'</Ora>);

    <Pur>app</Pur>.<Blu>use</Blu>(<Blu>helmet</Blu>());

    <Pur>app</Pur>.<Blu>use</Blu>(<Pur>req</Pur>, <Pur>res</Pur>, <Blu>next</Blu>) <Yel>=></Yel> {
        <Pur>res</Pur>.<Blu>setHeader</Blu>(<Ora>'Access-Control-Allow-Origin'</Ora>, <Ora>'*'</Ora>);
        <Pur>res</Pur>.<Blu>setHeader</Blu>(<Ora>'Access-Control-Allow-Headers'</Ora>, <Ora>'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'</Ora>);
        <Pur>res</Pur>.<Blu>setHeader</Blu>(<Ora>'Access-Control-Allow-Methods'</Ora>, <Ora>'GET, POST, PUT, DELETE, PATCH, OPTIONS'</Ora>);
        <Blu>next</Blu>();
    }

    <Pur>app</Pur>.<Blu>use</Blu>(<Pur>bodyParser</Pur>.<Blu>json</Blu>());
    <Pur>app</Pur>.<Blu>use</Blu>(<Blu>expressSanitizer</Blu>());

    <Pur>app</Pur>.<Blu>use</Blu>(<Ora>'/images'</Ora>, <Pur>express</Pur>.<Blu>static</Blu>(<Pur>path</Pur>.<Blu>join</Blu>(<Pur>__dirname</Pur>, <Ora>"images"</Ora>)));
    <Pur>app</Pur>.<Blu>use</Blu>(<Ora>'/api'</Ora>, <Pur>userRoutes</Pur>);
    <Pur>app</Pur>.<Blu>use</Blu>(<Ora>'/api/post'</Ora>, <Pur>postsRoutes</Pur>);
    <Pur>app</Pur>.<Blu>use</Blu>(<Ora>'/api/admin'</Ora>, <Pur>adminRoutes</Pur>);

    <Pur>module</Pur>.<Pur>exports</Pur> = <Pur>app</Pur>

    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-12 -->
                    <div class="tab-pane fade" id="v-backend-configurations-db" role="tabpanel" aria-labelledby="v-backend-configurations-db-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Configurations - DataBase</h3>
                            <p class="code_path">~/backend/db</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">DataBase</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>var</Yel> <Pur>mysql</Pur> = <Blu>require</Blu>(<Ora>'mysql'</Ora>);
    <Blu>require</Blu>(<Ora>'dotenv'</Ora>).<Blu>config</Blu>();

    <Yel>var</Yel> <Pur>db</Pur> = <Pur>mysql</Pur>.<Blu>createConnection</Blu>({
        <Blu>host</Blu>                 : <Pur>process</Pur>.<Blu>env</Blu>.<Blu>DB_HOST</Blu>,
        <Blu>user</Blu>                 : <Pur>process</Pur>.<Blu>env</Blu>.<Blu>DB_USER</Blu>,
        <Blu>password</Blu>             : <Pur>process</Pur>.<Blu>env</Blu>.<Blu>DB_PASSWORD</Blu>,
        <Blu>database</Blu>             : <Pur>process</Pur>.<Blu>env</Blu>.<Blu>DB_DATABASE</Blu>,
        <Blu>multipleStatements</Blu>   : <Sau>true</Sau>
    })

    <Pur>db</Pur>.<Blu>connect</Blu>(<Pur>err</Pur> <Yel>=></Yel> {
        <Yel>if</Yel>(<Pur>err</Pur>) {
            <Pur>console</Pur>.<Blu>log</Blu>(<Ora>'Database not connected! : '</Ora> <Yel>+</Yel> <Pur>JSON</Pur>.<Blu>stringify</Blu>(<Pur>err</Pur>, <Sau>undefined</Sau>, <Blu>2</Blu>))
        } <Yel>else</Yel> {
            <Pur>console</Pur>.<Blu>log</Blu>(<Ora>'
     _____   _____    _____   _   _   _____   _____       ___  ___       ___   __   _   _       ___  \n\
    /  ___| |  _  \  /  _  \ | | | | |  _  \ /  _  \     /   |/   |     /   | |  \ | | | |     /   | \n\
    | |     | |_| |  | | | | | | | | | |_| | | | | |    / /|   /| |    / /| | |   \| | | |    / /| | \n\
    | |  _  |  _  /  | | | | | | | | |  ___/ | | | |   / / |__/ | |   / / | | | |\   | | |   / / | | \n\
    | |_| | | | \ \  | |_| | | |_| | | |     | |_| |  / /       | |  / /  | | | | \  | | |  / /  | | \n\
    \_____/ |_|  \_\ \_____/ \_____/ |_|     \_____/ /_/        |_| /_/   |_| |_|  \_| |_| /_/   |_| \n\
    \n\
    Bienvenue sur l'api de Grouponania
            '</Ora>)
        }
    })

    <Pur>module</Pur>.<Pur>exports</Pur> = <Pur>db</Pur>;
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <!-- backend-13 -->
                    <div class="tab-pane fade" id="v-backend-configurations-server" role="tabpanel" aria-labelledby="v-backend-configurations-server-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Configurations - Server</h3>
                            <p class="code_path">~/backend/server</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Server</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Yel>const</Yel> <Pur>http</Pur> = <Blu>require</Blu>(<Ora>'http'</Ora>);
    <Yel>const</Yel> <Pur>app</Pur> = <Blu>require</Blu>(<Ora>'./app'</Ora>);

    <Yel>const</Yel> <Blu>normalizePort</Blu> = <Pur>val</Pur> <Yel>=></Yel> {
        <Yel>const</Yel> <Pur>port</Pur> = (<Pur>val</Pur>, <Pur>10</Pur>);

        <Yel>if</Yel> (<Blu>isNaN</Blu>(<Pur>port</Pur>)) {
            <Yel>return</Yel> <Pur>val</Pur>;
        }
        <Yel>if</Yel> (<Pur>port</Pur> <Yel>>=</Yel> <Blu>0</Blu>) {
            <Yel>return</Yel> <Pur>port</Pur>;
        }
        <Yel>return</Yel> <Sau>false</Sau>;
    }

    <Yel>const</Yel> <Blu>port</Blu> = <Blu>normalizePort</Blu>(<Pur>process</Pur>.<Blu>env</Blu>.<Blu>PORT</Blu> <Yel>||</Yel> <Ora>'3000'</Ora>);
    <Pur>app</Pur>.<Blu>set</Blu>(<Ora>'port'</Ora>, <Pur>port</Pur>);

    <Yel>const</Yel> <Blu>errorHandler</Blu> = <Pur>error</Pur> <Yel>=></Yel> {
        <Yel>if</Yel> (<Pur>error</Pur>.<Blu>syscall</Blu> <Yel>!==</Yel> <Ora>'listen'</Ora>) {
            <Yel>throw</Yel> <Pur>error</Pur>;
        }
        <Yel>const</Yel> <Pur>address</Pur> = <Pur>server</Pur>.<Blu>address</Blu>();
        <Yel>const</Yel> <Pur>bind</Pur> = <Yel>typeof</Yel> <Pur>address</Pur> <Yel>===</Yel> <Ora>'string'</Ora> <Yel>?</Yel> <Ora>'pipe '</Ora> <Yel>+</Yel> <Pur>address</Pur> <Yel>:</Yel> <Ora>'port: '</Ora> <Pur>port</Pur>
        <Yel>switch</Yel> (<Pur>error</Pur>.<Pur>code</Pur>) {
            <Yel>case</Yel> <Ora>'EACCES'</Ora> :
                <Pur>console</Pur>.<Blu>error</Blu>(<Pur>bind</Pur> <Yel>+</Yel> <Ora>' requires elevated privileges.'</Ora>);
                <Pur>process</Pur>.<Blu>exit</Blu>(<Blu>1</Blu>);
                <Yel>break</Yel>;
            <Yel>case</Yel> <Ora>'EADDRINUSE'</Ora> :
                <Pur>console</Pur>.<Blu>error</Blu>(<Pur>bind</Pur> <Yel>+</Yel> <Ora>' is already in use.'</Ora>);
                <Pur>process</Pur>.<Blu>exit</Blu>(<Blu>1</Blu>);
                <Yel>break</Yel>;
            <Yel>defaukt</Yel> :
                <Yel>throw</Yel> <Pur>error</Pur>
        }
    };

    <Yel>const</Yel> <Pur>server</Pur> = <Pur>http</Pur>.<Blu>createServer</Blu>(<Pur>app</Pur>);

    <Pur>server</Pur>.<Blu>on</Blu>(<Ora>'error'</Ora>, <Blu>errorHandler</Blu>)
    <Pur>server</Pur>.<Blu>on</Blu>(<Ora>'listening'</Ora>, () <Yel>=></Yel> {
        <Yel>const</Yel> <Pur>address</Pur> = <Pur>server</Pur>.<Blu>address</Blu>()
        <Yel>const</Yel> <Pur>bind</Pur> = <Yel>typeof</Yel> <Pur>address</Pur> <Yel>===</Yel> <Ora>'string'</Ora> <Yel>?</Yel> <Ora>'pipe '</Ora> <Yel>+</Yel> <Pur>address</Pur> <Yel>:</Yel> <Ora>'port: '</Ora> <Pur>port</Pur>;
        <Pur>console</Pur>.<Blu>log</Blu>(<Ora>'Listening on '</Ora> <Yel>+</Yel> <Pur>bind</Pur>)
    });

    <Pur>server</Pur>.<Blu>listen</Blu>(<Pur>port</Pur>)
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>


                    <div class="tab-pane fade" id="v-frontend-components-alert" role="tabpanel" aria-labelledby="v-frontend-components-alert-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - Alert</h3>
                            <p class="code_path">~/src/components/Alert/Alert.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Alert - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"ui message"</Ora> :<Yel>class</Yel>=<Ora>"<Pur>typeMessage</Pur>"</Ora><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-message-header</Gre> <Yel>class</Yel>=<Ora>"text-dark"</Ora><Blu>></Blu>{{ <Pur>title</Pur> }}<Blu>&#60;</Blu><Gre>/sui-message-header</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>p</Gre><Blu>></Blu>{{ <Pur>message</Pur> }}<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">Alert - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>props</Pur>: {
                <Pur>title</Pur>: <Red>String</Red>,
                <Pur>message</Pur>: <Red>String</Red>,
                <Pur>typeMessage</Pur>: <Red>String</Red>,
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-delete-account" role="tabpanel" aria-labelledby="v-frontend-components-delete-account-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - DeleteAccount</h3>
                            <p class="code_path">~/src/components/Button/DeleteAccount.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">DeleteAccount - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-button</Gre> @<Yel>click</Yel>=<Ora>"<Pur>toggleDeleteAccount</Pur>"</Ora> <Yel>class</Yel>=<Ora>"delete__account"</Ora><Blu>></Blu>Supprimer le compte<Blu>&#60;</Blu><Gre>/sui-button</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal__delete"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"post-center py-5 text-center w-75 mx-auto"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu>i<Gre></Gre> <Yel>class</Yel>=<Ora>"exclamation triangle icon display-1"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>h3<Gre></Gre> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>></Blu>Devrions-nous arrêter maintenant ?<Blu>&#60;</Blu><Gre>/h3</Gre><Blu>></Blu>

                    <Blu>&#60;</Blu>p<Gre></Gre> <Yel>class</Yel>=<Ora>"py-5"</Ora><Blu>></Blu>Toutes vos données seront effacées. Votre nom d'utilisateur sera accessible à tous<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>p<Gre></Gre><Blu>></Blu>Êtes-vous sûr de vouloir poursuivre cette action ?<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
                    
                    <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>button</Gre> <Yel>v-if</Yel>=<Ora>"<Yel>!</Yel><Pur>loading</Pur>"</Ora> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Supprimer le compte"</Ora> <Yel>type</Yel>=<Ora>"button"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>deleteUser</Pur>"</Ora><Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>button</Gre> <Yel>v-else</Yel> <Yel>loading</Yel> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Loading"</Ora> <Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>button</Gre> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Non merci"</Ora> <Yel>type</Yel>=<Ora>"button"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>toggleDeleteAccount</Pur>"</Ora> <Yel>style</Yel>=<Ora>"background: transparent; border: none; color;"</Ora> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>/></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">DeleteAccount - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>methods</Pur>: {
                <Blu>toggleDeleteAccount</Blu> () {
                    <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                },
                <Blu>deleteUser</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>loading</Blu> = <Sau>true</Sau>

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>delete</Blu>(<Ora>`/user/<Gre>${<Pur>user_id</Pur>.<Blu>userId</Blu>}</Gre>`</Ora>)
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                        <Pur>sessionStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'token'</Ora>)
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'image'</Ora>)
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'banner'</Ora>)
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'first_name'</Ora>)
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'last_name'</Ora>)

                        <Yel>if</Yel> (<Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                            <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)
                        }
                        <Red>this</Red>.<Blu>loading</Blu> = <Sau>false</Sau>
                        <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                        <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>) 
                      })
                },
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-comment-button" role="tabpanel" aria-labelledby="v-frontend-components-comment-button-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - CommentButton</h3>
                            <p class="code_path">~/src/components/Button/CommentButton.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">CommentButton - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"comment-active"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>toggle</Pur>"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"comment outline icon"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu>{{ <Pur>comments_number</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>sui-modal-content</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-card</Gre> <Yel>class</Yel>=<Ora>"mx-auto w-100 post-center px-3"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex align-items-center"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>sui-image</Gre> :<Yel>class</Yel>=<Ora>"<Pur>imageUser</Pur>"</Ora> <Yel>shape</Yel>=<Ora>"circular"</Ora> <Yel>size</Yel>=<Ora>"mini"</Ora> <Yel>class</Yel>=<Ora>"mr-3"</Ora><Blu> /></Blu>
                            <Blu>&#60;</Blu><Gre>router-link</Gre> :<Yel>to</Yel>=<Ora>"'/profil/' <Yel>+</Yel> <Pur>user_id</Pur>"</Ora><Blu>></Blu>
                                <Blu>&#60;</Blu><Gre>span</Gre> <Yel>class</Yel>=<Ora>"font-weight-bold text-white"</Ora><Blu>></Blu>{{ <Pur>first_name</Pur> }} {{ <Pur>last_name</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>/router-link</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>

                        <Blu>&#60;</Blu><Gre>sui-card-content</Gre> <Yel>class</Yel>=<Ora>"border-0 post-center"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>p</Gre><Blu>></Blu>{{ <Pur>content</Pur> }}<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-card-content</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-card</Gre><Blu>></Blu>

                    <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>method</Yel>=<Ora>"post"</Ora> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>createComment</Pur>"</Ora> <Yel>class</Yel>=<Ora>"post-center py-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>h2</Gre> <Yel>is</Yel>=<Ora>"sui-header"</Ora><Blu>></Blu>
                                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"avatar current-user__image mx-auto"</Ora> .<Yel>style</Yel>=<Ora>"<Pur>backgroundImage</Pur>: 'url(' <Yel>+</Yel> <Pur>imageCurrentUser</Pur> <Yel>+</Yel> ')'"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>/h2</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>sui-form-field</Gre> <Yel>class</Yel>=<Ora>"w-100 ml-3"</Ora><Blu>></Blu>
                                <Blu>&#60;</Blu><Gre>textarea</Gre> :<Yel>id</Yel>=<Ora>"<Pur>idTextAreaComment</Pur>"</Ora> <Yel>rows</Yel>=<Ora>"1"</Ora> <Yel>class</Yel>=<Ora>"bg-transparent border-0 w-87 p-3 f-20 height-base"</Ora> <Yel>placeholder</Yel>=<Ora>"Poster votre réponse"</Ora> <Yel>v-model</Yel>=<Ora>"<Pur>commentValue</Pur>"</Ora> <Yel>v-on</Yel>:<Yel>keydown</Yel>=<Ora>"<Blu>EnterText</Blu></Ora>()<Ora>"</Ora> <Blu>/></Blu>
                            <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"text-right"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Red>PostButton</Red>
                              <Yel>name</Yel>=<Ora>"Commenter"</Ora>
                              <Yel>v-bind</Yel>=<Ora>"</Ora>{<Pur>stateButton</Pur>}<Ora>"</Ora>
                            <Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-modal-content</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">CommentButton - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>PostButton</Pur> <Yel>from</Yel> <Ora>'./PostButton.vue'</Ora>;
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>props</Pur>: {
                <Pur>comments_number</Pur>: <Red>Number</Red>,
                <Pur>post_id</Pur>: <Red>Number</Red>,
                <Pur>content</Pur>: <Red>String</Red>,
                <Pur>first_name</Pur>: <Red>String</Red>,
                <Pur>last_name</Pur>: <Red>String</Red>,
                <Pur>imageUser</Pur>: <Red>String</Red>,
                <Pur>post_create</Pur>: <Red>String</Red>,
                <Pur>user_id</Pur>: <Red>Number</Red>,
            },
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>open</Pur>: <Sau>false</Sau>,
                    <Pur>commentValue</Pur>: <Ora>""</Ora>,
                    <Pur>stateButton</Pur>: <Sau>false</Sau>,
                    <Pur>imageCurrentUser</Pur>: <Ora>""</Ora>,
                    <Pur>idTextAreaComment</Pur>: <Ora>""</Ora>,
                }
            },
            <Pur>components</Pur>: {
                <Pur>PostButton</Pur>
            },
            <Pur>methods</Pur>: {
                <Blu>toggle</Blu> () {

                },
                <Blu>createComment</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>post</Blu>(<Ora>`post/<Gre>${<Red>this</Red><Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>/comment`</Ora>, {
                          <Pur>content</Pur>: <Red>this</Red>.<Blu>commentValue</Blu>,
                          <Pur>userId</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>,
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })
                },
                <Blu>EnterText</Blu> () {
                    <Yel>if</Yel> (<Red>this</Red>.<Blu>open</Blu> <Yel>==</Yel> <Sau>true</Sau>) {
                        <Yel>if</Yel> (<Red>this</Red>.<Blu>commentValue</Blu>) {
                            <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>true</Sau>
                        } <Yel>else</Yel> {
                            <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>false</Sau>
                        }
                    }
                },
            },
            <Blu>mounted</Blu> () {
                <Yel>var</Yel> <Pur>textarea</Pur> = <Pur>document</Pur>.<Blu>getElementById</Blu>(<Red>this</Red>.<Blu>idTextAreaComment</Blu>)
                <Pur>textarea</Pur>.<Blu>addEventListener</Blu>(<Ora>'keydown'</Ora>, <Pur>autosize</Pur>)

                <Yel>function</Yel> <Blu>autosize</Blu>() {
                    <Yel>var</Yel> <Pur>el</Pur> = <Red>this</Red>
                    <Blu>setTimeout</Blu>(<Yel>function</Yel>() {
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:auto;'</Ora>
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:' <Yel>+</Yel> <Pur>el</Pur>.<Blu>scrollHeight</Blu> <Yel>+</Yel> 'px'</Ora>
                    }, <Blu>0</Blu>)
                }
            },
            <Blu>created</Blu> () {
                <Yel>let</Yel> <Pur>image</Pur> = <Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token</Ora>)
                <Red>this</Red>.<Blu>imageCurrentUser</Blu> = <Pur>image</Pur>
                <Red>this</Red>.<Blu>idTextAreaComment</Blu> = <Ora>'creareComment'</Ora> <Yel>+</Yel> <Red>String</Red>(<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>)
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-dislike-button" role="tabpanel" aria-labelledby="v-frontend-components-dislike-button-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - DislikeButton</h3>
                            <p class="code_path">~/src/components/Button/DislikeButton.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">DislikeButton - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>button</Gre> @<Yel>click</Yel>=<Ora>"<Pur>Dislike_post</Pur>"</Ora> <Yel>class</Yel>=<Ora>"border-0 bg-transparent dislike-active text-white d-flex align-items-center"</Ora><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>template</Gre> <Yel>v-if</Yel>=<Ora>"<Pur>disliked</Pur>"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"thumbs down icon text-danger"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>span</Gre> <Yel>class</Yel>=<Ora>"text-danger"</Ora><Blu>></Blu>{{ <Pur>dislikes_number</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>template</Gre> <Yel>v-else</Yel><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"thumbs down outline icon"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu>{{ <Pur>dislikes_number</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>

        <Blu>&#60;</Blu><Gre>/button</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">LikeButton - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>props</Pur>: {
                <Pur>dislikes_number</Pur>: <Red>Number</Red>,
                <Pur>post_id</Pur>: <Red>Number</Red>,
            },
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>disliked</Pur>: <Sau>false</Sau>
                }
            },
            <Pur>methods</Pur>: {
                <Blu>Like_post</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>post</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>/dislike`</Ora>, {
                          <Pur>user_id</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                          <Red>this</Red>.<Blu>disliked</Blu> = <Sau>true</Sau>
                          <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })
                }
            },
            <Blu>mounted</Blu> () {
                <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                <Red>this</Red>.<Blu>$axios</Blu>
                  .<Blu>get</Blu>(<Ora>`/post/disliked/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>/<Gre>${<Pur>user_id</Pur>.<Blu>userId</Blu>}</Gre>`</Ora>, {
                      <Pur>user_id</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>
                  })
                  .<Blu>then</Blu>(<Pur>res</Pur> <Yel>=></Yel>, {
                      <Pur>res</Pur>.<Pur>data</Pur> <Yel>==</Yel> <Blu>1</Blu> <Yel>?</Yel> <Red>this</Red>.<Blu>disliked</Blu> = <Sau>true</Sau> <Yel>:</Yel> <Red>this</Red>.<Blu>disliked</Blu> = <Sau>false</Sau>
                  })
                  .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                      <Red>console</Red>.<Blu>log</Blu>(<Ora>"Une erreur est survenue concernant le bouton du dislike..."</Ora>)
                  })
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-like-button" role="tabpanel" aria-labelledby="v-frontend-components-like-button-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - LikeButton</h3>
                            <p class="code_path">~/src/components/Button/LikeButton.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">LikeButton - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>button</Gre> @<Yel>click</Yel>=<Ora>"<Pur>Like_post</Pur>"</Ora> <Yel>class</Yel>=<Ora>"border-0 bg-transparent like-active text-white d-flex align-items-center"</Ora><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>template</Gre> <Yel>v-if</Yel>=<Ora>"<Pur>liked</Pur>"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"thumbs up icon text-succces"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>span</Gre> <Yel>class</Yel>=<Ora>"text-succces"</Ora><Blu>></Blu>{{ <Pur>likes_number</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>template</Gre> <Yel>v-else</Yel><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"thumbs up outline icon"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu>{{ <Pur>likes_number</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>

        <Blu>&#60;</Blu><Gre>/button</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">LikeButton - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>props</Pur>: {
                <Pur>likes_number</Pur>: <Red>Number</Red>,
                <Pur>post_id</Pur>: <Red>Number</Red>,
            },
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>liked</Pur>: <Sau>false</Sau>
                }
            },
            <Pur>methods</Pur>: {
                <Blu>Like_post</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>post</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>/like`</Ora>, {
                          <Pur>user_id</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                          <Red>this</Red>.<Blu>liked</Blu> = <Sau>true</Sau>
                          <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })
                }
            },
            <Blu>mounted</Blu> () {
                <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                <Red>this</Red>.<Blu>$axios</Blu>
                  .<Blu>get</Blu>(<Ora>`/post/liked/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>/<Gre>${<Pur>user_id</Pur>.<Blu>userId</Blu>}</Gre>`</Ora>, {
                      <Pur>user_id</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>
                  })
                  .<Blu>then</Blu>(<Pur>res</Pur> <Yel>=></Yel>, {
                      <Pur>res</Pur>.<Pur>data</Pur> <Yel>==</Yel> <Blu>1</Blu> <Yel>?</Yel> <Red>this</Red>.<Blu>liked</Blu> = <Sau>true</Sau> <Yel>:</Yel> <Red>this</Red>.<Blu>liked</Blu> = <Sau>false</Sau>
                  })
                  .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                      <Red>console</Red>.<Blu>log</Blu>(<Ora>"Une erreur est survenue concernant le bouton du like..."</Ora>)
                  })
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-logout-button" role="tabpanel" aria-labelledby="v-frontend-components-logout-button-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - LogoutButton</h3>
                            <p class="code_path">~/src/components/Button/LogoutButton.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">LogoutButton - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"logout-button"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>Logout</Pur>"</Ora><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-icon</Gre> <Yel>name</Yel>=<Ora>"power off"</Ora> <Yel>class</Yel>=<Ora>"shadow-none m-0"</Ora> <Yel>circular</Yel> <Yel>size</Yel>=<Ora>"large"</Ora> /<Blu>></Blu>
            <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu>Se déconnecter<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">LogoutButton - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>methods</Pur>: {
                <Blu>Logout</Blu> () {
                    <Pur>sessionStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'token'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'image'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'banner'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'first_name'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'last_name'</Ora>)

                    <Yel>if</Yel> (<Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)
                    }

                    <Red>this</Red>.<Pur>$store</Pur>.<Blu>commit</Blu>(<Ora>'DISCONNECT_USER'</Ora>)
                    <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                }
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-modify-banner" role="tabpanel" aria-labelledby="v-frontend-components-modify-banner-tab">
                        Modify Banner
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-modify-picture" role="tabpanel" aria-labelledby="v-frontend-components-modify-picture-tab">
                        Modify Picture
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-new-post-button" role="tabpanel" aria-labelledby="v-frontend-components-new-post-button-tab">
                        New Post Button
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-post-button" role="tabpanel" aria-labelledby="v-frontend-components-post-button-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - PostButton</h3>
                            <p class="code_path">~/src/components/Button/PostButton.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">PostButton - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>button</Gre> <Yel>v-if</Yel>=<Ora>"<Pur>stateButton</Pur> <Yel>===</Yel> <Sau>false</Sau>"</Ora> <Yel>class</Yel>=<Ora>"ml-auto postButton"</Ora> <Yel>disabled</Yel><Blu>></Blu>{{ <Pur>name</Pur> }}<Blu>&#60;</Blu><Gre>/button</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>button</Gre> <Yel>v-else</Yel> <Yel>class</Yel>=<Ora>"ml-auto postButton"</Ora> <Yel>type</Yel>=<Ora>"submit"</Ora><Blu>></Blu>{{ <Pur>name</Pur> }}<Blu>&#60;</Blu><Gre>/button</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">PostButton - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>Other</Pur>: {
                <Pur>title</Pur>: <Red>String</Red>,
                <Pur>stateButton</Pur>: <Red>String</Red>,
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-update-identity" role="tabpanel" aria-labelledby="v-frontend-components-update-identity-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - UpdateIdentity</h3>
                            <p class="code_path">~/src/components/Button/UpdateIdentity.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">UpdateIdentity - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-button</Gre> @<Yel>click</Yel>=<Ora>"<Pur>toggleModalIdentity</Pur>"</Ora> <Yel>class</Yel>=<Ora>"update__identity"</Ora><Blu>></Blu>Modifier votre identité<Blu>&#60;</Blu><Gre>/sui-button</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal__identity"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"post-center py-5 text-center w-75 mx-auto"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu>i<Gre></Gre> <Yel>class</Yel>=<Ora>"user circle icon display-1"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>h3<Gre></Gre> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>></Blu>Besoin d'une nouvelle identité ?<Blu>&#60;</Blu><Gre>/h3</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>p<Gre></Gre> <Yel>class</Yel>=<Ora>"py-5"</Ora><Blu>></Blu>Modifier votre identité afin que vos collègues puissent vous retrouver plus facilement.<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
                    
                    <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>updateIdentity</Pur>"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>label</Gre> <Yel>class</Yel>=<Ora>"text-white text-left"</Ora> <Blu>></Blu>Prénom<Blu>&#60;</Blu><Gre>/label</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>input</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>first_name</Pur>"</Ora> :<Yel>placeholder</Yel>=<Ora>"<Pur>first_name</Pur>"</Ora> <Yel>type</Yel>=<Ora>"text"</Ora><Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>label</Gre> <Yel>class</Yel>=<Ora>"text-white text-left"</Ora> <Blu>></Blu>Nom<Blu>&#60;</Blu><Gre>/label</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>input</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>last_name</Pur>"</Ora> :<Yel>placeholder</Yel>=<Ora>"<Pur>last_name</Pur>"</Ora> <Yel>type</Yel>=<Ora>"text"</Ora><Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>

                    <Blu>&#60;</Blu><Gre>div</Gre> <Blu>id</Blu>=<Ora>"class="d-flex justify-content-around py-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>v-if</Yel>=<Ora>"<Yel>!</Yel><Pur>loading</Pur>"</Ora> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Mettre à jour"</Ora> <Yel>type</Yel>=<Ora>"submit"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>deleteUser</Pur>"</Ora><Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>v-else</Yel> <Yel>loading</Yel> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Loading"</Ora> <Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Non merci"</Ora> <Yel>type</Yel>=<Ora>"button"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>toggleModalIdentity</Pur>"</Ora> <Yel>style</Yel>=<Ora>"background: transparent; border: none; color;"</Ora> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>/></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">UpdateIdentity - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>first_name</Pur>: <Ora>""</Ora>,
                    <Pur>last_name</Pur>: <Ora>""</Ora>,
                    <Pur>open</Pur>: <Sau>false</Sau>,
                    <Pur>message</Pur>: <Ora>""</Ora>,
                    <Pur>loading</Pur>: <Sau>false</Sau>
                }
            },
            <Pur>methods</Pur>: {
                <Blu>toggleModalIdentity</Blu> () {
                    <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                },
                <Blu>updateIdentity</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>loading</Blu> = <Sau>true</Sau>

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>put</Blu>(<Ora>`/user/identity/<Gre>${<Pur>user_id</Pur>.<Blu>userId</Blu>}</Gre>`</Ora>, {
                          <Pur>first_name</Pur>: <Red>this</Red>.<Blu>first_name</Blu>,
                          <Pur>last_name</Pur>: <Red>this</Red>.<Blu>last_name</Blu>,
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                        <Red>this</Red>.<Blu>message</Blu> = <Ora>Vos nouvelles informations sont mis à jour."</Ora>
                        <Pur>localStorage</Pur>.<Blu>setItem</Blu>(<Ora>'first_name'</Ora>, <Red>localStorage</Red>.<Blu>first_name</Blu>)
                        <Pur>localStorage</Pur>.<Blu>setItem</Blu>(<Ora>'last_name'</Ora>, <Red>this</Red>.<Blu>last_name</Blu>)
                        <Blu>setTimeout</Blu>(<Yel>function</Yel>() {
                            <Red>this</Red>.<Blu>loading</Blu> = <Sau>false</Sau>
                            <Red>this</Red>.<Blu>open</Blu> = <Sau>false</Sau>
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                        }, <Blu>1000</Blu>)
                      })
                      .<Blu>catch</Blu>(() <Yel>=></Yel>, {
                        <Red>this</Red>.<Blu>message</Blu> = <Ora>"Une erreur est survenue"</Ora>
                      })
                },
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-update-password" role="tabpanel" aria-labelledby="v-frontend-components-update-password-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - UpdatePassword</h3>
                            <p class="code_path">~/src/components/Button/UpdatePassword.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">UpdatePassword - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-button</Gre> @<Yel>click</Yel>=<Ora>"<Pur>toggleModalPassword</Pur>"</Ora> <Yel>class</Yel>=<Ora>"update__identity"</Ora><Blu>></Blu>Modifier votre mot de passe<Blu>&#60;</Blu><Gre>/sui-button</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal__identity"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"post-center py-5 text-center w-75 mx-auto"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu>i<Gre></Gre> <Yel>class</Yel>=<Ora>"key icon display-1"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>h3<Gre></Gre> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>></Blu>Un problème avec votre mot de passe ?<Blu>&#60;</Blu><Gre>/h3</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu>p<Gre></Gre> <Yel>class</Yel>=<Ora>"py-5"</Ora><Blu>></Blu>hoisissez un nouveau mot de passe.<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
                    
                    <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>updatePassword</Pur>"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>label</Gre> <Yel>class</Yel>=<Ora>"text-white text-left"</Ora> <Blu>></Blu>Mot de passe<Blu>&#60;</Blu><Gre>/label</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>input</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>password</Pur>"</Ora> <Yel>placeholder</Yel>=<Ora>"Nouveau mot de passe"</Ora> <Yel>type</Yel>=<Ora>"password"</Ora><Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>

                    <Blu>&#60;</Blu><Gre>div</Gre> <Blu>id</Blu>=<Ora>"class="d-flex justify-content-around py-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>v-if</Yel>=<Ora>"<Yel>!</Yel><Pur>loading</Pur>"</Ora> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Modifier le mot de passe"</Ora> <Yel>type</Yel>=<Ora>"submit"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>deleteUser</Pur>"</Ora><Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>v-else</Yel> <Yel>loading</Yel> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Loading"</Ora> <Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>sui-button</Gre> <Yel>fluid</Yel> <Yel>content</Yel>=<Ora>"Non merci"</Ora> <Yel>type</Yel>=<Ora>"button"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>toggleModalPassword</Pur>"</Ora> <Yel>style</Yel>=<Ora>"background: transparent; border: none; color;"</Ora> <Yel>class</Yel>=<Ora>"text-white"</Ora><Blu>/></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">UpdatePassword - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>password</Pur>: <Ora>""</Ora>,
                    <Pur>open</Pur>: <Sau>false</Sau>,
                    <Pur>message</Pur>: <Ora>""</Ora>,
                    <Pur>loading</Pur>: <Sau>false</Sau>
                }
            },
            <Pur>methods</Pur>: {
                <Blu>toggleModalPassword</Blu> () {
                    <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                },
                <Blu>toggleModalPassword</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                    <Red>this</Red>.<Blu>loading</Blu> = <Sau>true</Sau>

                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>put</Blu>(<Ora>`/user/identity/<Gre>${<Pur>user_id</Pur>.<Blu>userId</Blu>}</Gre>`</Ora>, {
                          <Pur>password</Pur>: <Red>this</Red>.<Blu>password</Blu>
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                        <Red>this</Red>.<Blu>message</Blu> = <Ora>"Le mot de passe a bien été enregistré"</Ora>
                        <Blu>setTimeout</Blu>(<Yel>function</Yel>() {
                            <Red>this</Red>.<Blu>loading</Blu> = <Sau>false</Sau>
                            <Red>this</Red>.<Blu>open</Blu> = <Sau>false</Sau>
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                        }, <Blu>1000</Blu>)
                      })
                      .<Blu>catch</Blu>(() <Yel>=></Yel>, {
                        <Red>this</Red>.<Blu>message</Blu> = <Ora>"Une erreur est survenue"</Ora>
                      })
                },
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-menu-comment-dropdown" role="tabpanel" aria-labelledby="v-frontend-components-menu-comment-dropdown-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - MenuCommentDropdown</h3>
                            <p class="code_path">~/src/components/Dropdown/MenuCommentDropdown.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">MenuCommentDropdown - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-dropdown</Gre> <Yel>class</Yel>=<Ora>"text-white h-25px"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>sui-dropdown-menu</Gre> <Yel>class</Yel>=<Ora>"bg-groupomania shadow-white"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-dropdown-item</Gre> <Yel>class</Yel>=<Ora>"text-white"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>modifyCommentModal</Pur>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>sui-icon</Gre> <Yel>name</Yel>=<Ora>"edit outline"</Ora><Blu> /></Blu>Modifier<Blu>&#60;</Blu><Gre>/sui-dropdown-item</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-dropdown-item</Gre> <Yel>class</Yel>=<Ora>"text-danger"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>DeleteComment</Pur>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>sui-icon</Gre> <Yel>name</Yel>=<Ora>"trash"</Ora><Blu> /></Blu>Supprimer<Blu>&#60;</Blu><Gre>/sui-dropdown-item</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-dropdown-menu</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-dropdown</Gre><Blu>></Blu>


            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal"</Ora><Blu>></Blu>

                <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>method</Yel>=<Ora>"post"</Ora> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>modifyCommentForm</Pur>"</Ora> <Yel>class</Yel>=<Ora>"post-center py-5 px-5"</Ora> <Yel>v-if</Yel>=<Ora>"<Yel>!</Yel><Pur>isAdmin</Pur>"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>h2</Gre> <Yel>is</Yel>=<Ora>"sui-header"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"avatar current-user__image mx-auto"</Ora> :<Yel>style</Yel>=<Ora>"</Ora>{<Pur>backgroundImage</Pur>: <Ora>'url('</Ora> <Yel>+</Yel> <Pur>imageUser</Pur> <Yel>+</Yel> <Ora>')'</Ora>}<Ora>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/h2</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre> <Yel>class</Yel>=<Ora>"w-100 ml-3"</Ora> <Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>textarea</Gre> <Blu>id</Blu>=<Ora>"modifyPostByModal"</Ora> <Yel>rows</Yel>=<Ora>"1"</Ora> <Yel>class</Yel>=<Ora>"bg-transparent border-0 w-87 p-3 f-20 height-base"</Ora> <Yel>name</Yel>=<Ora>"content"</Ora> <Yel>v-on</Yel>:<Yel>keydown</Yel>=<Ora>"</Ora><Blu>EnterText</Blu>()<Ora>"</Ora> <Yel>v-model</Yel>=<Ora>"<Pur>content</Pur>"</Ora> <Yel>size</Yel>=<Ora>"280"</Ora><Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex justify-content-end mt-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Red>PostButton</Red> <Yel>name</Yel>=<Ora>"Poster"</Ora> <Yel>v-bind</Yel>=<Ora>"</Ora>{<Pur>stateButton</Pur>}<Ora>"</Ora><Blu> /></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>


                <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>v-else</Yel> <Yel>method</Yel>=<Ora>"post"</Ora> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>modifyCommentForm</Pur>"</Ora> <Yel>class</Yel>=<Ora>"post-center py-5 px-5"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>h2</Gre> <Yel>is</Yel>=<Ora>"sui-header"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"avatar current-user__image mx-auto"</Ora> :<Yel>style</Yel>=<Ora>"</Ora>{<Pur>backgroundImage</Pur>: <Ora>'url('</Ora> <Yel>+</Yel> <Pur>imageUser</Pur> <Yel>+</Yel> <Ora>')'</Ora>}<Ora>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/h2</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre> <Yel>class</Yel>=<Ora>"w-100 ml-3"</Ora> <Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>textarea</Gre> <Blu>id</Blu>=<Ora>"modifyPostByModal"</Ora> <Yel>rows</Yel>=<Ora>"1"</Ora> <Yel>class</Yel>=<Ora>"bg-transparent border-0 w-87 p-3 f-20 height-base"</Ora> <Yel>name</Yel>=<Ora>"content"</Ora> <Yel>v-on</Yel>:<Yel>keydown</Yel>=<Ora>"</Ora><Blu>EnterText</Blu>()<Ora>"</Ora> <Yel>v-model</Yel>=<Ora>"<Pur>content</Pur>"</Ora> <Yel>size</Yel>=<Ora>"280"</Ora> <Yel>placeholder</Yel>=<Ora>"Modérer le contenu"</Ora> <Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex justify-content-end mt-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Red>PostButton</Red> <Yel>name</Yel>=<Ora>"Poster"</Ora> <Yel>v-bind</Yel>=<Ora>"</Ora>{<Pur>stateButton</Pur>}<Ora>"</Ora><Blu> /></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>

                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"post-center w-75 mx-auto"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Red>Alert</Red> <Yel>v-if</Yel>=<Ora>"<Pur>message</Pur>"</Ora> <Yel>title</Yel>=<Ora>"Hmm..."</Ora> :<Yel>message</Yel>=<Ora>"<Pur>message</Pur>"</Ora> <Yel>typeMessage</Yel>=<Ora>"error"</Ora><Blu> /></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">MenuCommentDropdown - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>PostButton</Pur> <Yel>from</Yel> <Ora>'../Button/PostButton.vue'</Ora>;
        <Gre>import</Gre> <Pur>Alert</Pur> <Yel>from</Yel> <Ora>'../Alert/Alert.vue'</Ora>;
        <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>stateButton</Pur>: <Sau>false</Sau>,
                    <Pur>open</Pur>: <Sau>false</Sau>,
                    <Pur>message</Pur>: <Sau>null</Sau>,
                    <Pur>content</Pur>: <Ora>""</Ora>,
                    <Pur>isAdmin</Pur>: <Sau>null</Sau>,
                }
            },
            <Pur>components</Pur>: {
                <Pur>PostButton</Pur>,
                <Pur>Alert</Pur>
            },
            <Pur>props</Pur>: {
                <Pur>comment_id</Pur>: <Red>Number</Red>,
                <Pur>first_name</Pur>: <Red>String</Red>,
                <Pur>last_name</Pur>: <Red>String</Red>,
                <Pur>imageUser</Pur>: <Red>String</Red>,
                <Pur>comment</Pur>: <Red>String</Red>,
                <Pur>comment_create</Pur>: <Red>String</Red>,
            },
            <Blu>beforeMount</Blu> () {
                <Red>this</Red>.<Pur>content</Pur> = <Red>this</Red>.<Pur>$props</Pur>.<Blu>comment</Blu>;
                <Yel>if</Yel>(<Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                    <Red>this</Red><Blu>isAdmin</Blu> = <Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)
                }
            },
            <Blu>mounted</Blu> () {
                <Yel>var</Yel> <Pur>textarea</Pur> = <Pur>document</Pur>.<Blu>getElementById</Blu>(<Red>this</Red>.<Blu>idTextAreaComment</Blu>)
                <Pur>textarea</Pur>.<Blu>addEventListener</Blu>(<Ora>'keydown'</Ora>, <Pur>autosize</Pur>)

                <Yel>function</Yel> <Blu>autosize</Blu>() {
                    <Yel>var</Yel> <Pur>el</Pur> = <Red>this</Red>
                    <Blu>setTimeout</Blu>(<Yel>function</Yel>() {
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:auto;'</Ora>
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:' <Yel>+</Yel> <Pur>el</Pur>.<Blu>scrollHeight</Blu> <Yel>+</Yel> 'px'</Ora>
                    }, <Blu>0</Blu>)
                }
            },
            <Pur>methods</Pur>: {
                <Blu>DeleteComment</Blu> () {
                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>delete</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$route</Pur>.<Pur>params</Pur>.<Blu>post_id</Blu>}</Gre>/comment/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>comment_id</Blu>}</Gre>`</Ora>)
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })
                },
                <Blu>modifyCommentModal</Blu> () {
                    <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                },
                <Blu>EnterText</Blu> () {
                    <Yel>if</Yel>(<Red>this</Red>.<Pur>content</Pur>) {
                        <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>true</Sau>
                    } <Yel>else</Yel> {
                        <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>false</Sau>
                    }
                },
                <Blu>moderateComment</Blu> () {
                    <Yel>if</Yel> (<Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                      <Red>this</Red>.<Blu>$axios</Blu>
                        .<Blu>put</Blu>(<Ora>`/admin/moderate/comment/<Gre>${<Red>this</Red>.<Pur>$route</Pur>.<Pur>params</Pur>.<Blu>post_id</Blu>}</Gre>/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>comment_id</Blu>}</Gre>`</Ora>, {
                            <Pur>comment</Pur>: <Red>this</Red>.<Pur>content</Pur>
                        })
                        .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                        })
                        .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Yel>if</Yel>(<Pur>err</Pur>.<Pur>response</Pur>.<Pur>status</Pur> <Yel>===</Yel> <Blu>403</Blu>) {
                                <Red>this</Red>.<Blu>message</Blu> = <Ora>"Une erreur est survenue lors de la modification de votre commentaire... Éviter d'utiliser les guillemets simple"</Ora>
                            }
                        })
                    }
                },
                <Blu>modifyCommentForm</Blu> () {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                    <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)
                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>put</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$route</Pur>.<Pur>params</Pur>.<Blu>post_id</Blu>}</Gre>/comment/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>comment_id</Blu>}</Gre>`</Ora>, {
                            <Pur>user_id</Pur>: <Pur>user_id</Pur>.<Blu>userId</Blu>
                            <Pur>content</Pur>: <Red>this</Red>.<Pur>content</Pur>
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Yel>if</Yel>(<Pur>err</Pur>.<Pur>response</Pur>.<Pur>status</Pur> <Yel>===</Yel> <Blu>403</Blu>) {
                                <Red>this</Red>.<Blu>message</Blu> = <Ora>"Une erreur est survenue lors de la modification de votre commentaire... Éviter d'utiliser les guillemets simple"</Ora>
                            }
                      })
                },
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-menu-post-dropdown" role="tabpanel" aria-labelledby="v-frontend-components-menu-post-dropdown-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - MenuPostDropdown</h3>
                            <p class="code_path">~/src/components/Dropdown/MenuPostDropdown.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">MenuPostDropdown - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-dropdown</Gre> <Yel>class</Yel>=<Ora>"text-white h-25px"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>sui-dropdown-menu</Gre> <Yel>class</Yel>=<Ora>"bg-groupomania shadow-white"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-dropdown-item</Gre> <Yel>class</Yel>=<Ora>"text-white"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>modifyPostModal</Pur>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>sui-icon</Gre> <Yel>name</Yel>=<Ora>"edit outline"</Ora><Blu> /></Blu>Modifier<Blu>&#60;</Blu><Gre>/sui-dropdown-item</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-dropdown-item</Gre> <Yel>class</Yel>=<Ora>"text-danger"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>DeletePost</Pur>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>sui-icon</Gre> <Yel>name</Yel>=<Ora>"trash"</Ora><Blu> /></Blu>Supprimer<Blu>&#60;</Blu><Gre>/sui-dropdown-item</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-dropdown-menu</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-dropdown</Gre><Blu>></Blu>


            <Blu>&#60;</Blu><Gre>sui-modal</Gre> <Yel>v-model</Yel>=<Ora>"<Pur>open</Pur>"</Ora> <Yel>class</Yel>=<Ora>"bg-modal"</Ora><Blu>></Blu>

                <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>method</Yel>=<Ora>"post"</Ora> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>modifyPostForm</Pur>"</Ora> <Yel>class</Yel>=<Ora>"post-center py-5 px-5"</Ora> <Yel>v-if</Yel>=<Ora>"<Yel>!</Yel><Pur>isAdmin</Pur>"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>h2</Gre> <Yel>is</Yel>=<Ora>"sui-header"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"avatar current-user__image mx-auto"</Ora> :<Yel>style</Yel>=<Ora>"</Ora>{<Pur>backgroundImage</Pur>: <Ora>'url('</Ora> <Yel>+</Yel> <Pur>imageUser</Pur> <Yel>+</Yel> <Ora>')'</Ora>}<Ora>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/h2</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre> <Yel>class</Yel>=<Ora>"w-100 ml-3"</Ora> <Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>textarea</Gre> :<Yel>id</Yel>=<Ora>"<Pur>idTextAreaUpdatePost</Pur>"</Ora> <Yel>rows</Yel>=<Ora>"1"</Ora> <Yel>class</Yel>=<Ora>"bg-transparent border-0 w-87 p-3 f-20 height-base"</Ora> <Yel>name</Yel>=<Ora>"content"</Ora> <Yel>v-on</Yel>:<Yel>keydown</Yel>=<Ora>"</Ora><Blu>EnterText</Blu>()<Ora>"</Ora> <Yel>v-model</Yel>=<Ora>"<Pur>content_post</Pur>"</Ora> <Yel>size</Yel>=<Ora>"280"</Ora><Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex justify-content-end mt-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Red>PostButton</Red> <Yel>name</Yel>=<Ora>"Poster"</Ora> <Yel>v-bind</Yel>=<Ora>"</Ora>{<Pur>stateButton</Pur>}<Ora>"</Ora><Blu> /></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>


                <Blu>&#60;</Blu><Gre>sui-form</Gre> <Yel>v-else</Yel> <Yel>method</Yel>=<Ora>"post"</Ora> <Yel>v-on</Yel>:<Yel>submit</Yel>.<Yel>prevent</Yel>=<Ora>"<Pur>modifyCommentForm</Pur>"</Ora> <Yel>class</Yel>=<Ora>"post-center py-5 px-5"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>h2</Gre> <Yel>is</Yel>=<Ora>"sui-header"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"avatar current-user__image mx-auto"</Ora> :<Yel>style</Yel>=<Ora>"</Ora>{<Pur>backgroundImage</Pur>: <Ora>'url('</Ora> <Yel>+</Yel> <Pur>imageUser</Pur> <Yel>+</Yel> <Ora>')'</Ora>}<Ora>"</Ora><Blu>></Blu><Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/h2</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-form-field</Gre> <Yel>class</Yel>=<Ora>"w-100 ml-3"</Ora> <Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>textarea</Gre> :<Yel>id</Yel>=<Ora>"<Pur>idTextAreaUpdatePost</Pur>"</Ora> <Yel>rows</Yel>=<Ora>"1"</Ora> <Yel>class</Yel>=<Ora>"bg-transparent border-0 w-87 p-3 f-20 height-base"</Ora> <Yel>name</Yel>=<Ora>"content"</Ora> <Yel>v-on</Yel>:<Yel>keydown</Yel>=<Ora>"</Ora><Blu>EnterText</Blu>()<Ora>"</Ora> <Yel>v-model</Yel>=<Ora>"<Pur>content_post</Pur>"</Ora> <Yel>size</Yel>=<Ora>"280"</Ora> <Yel>placeholder</Yel>=<Ora>"Modérer le post"</Ora> <Blu>/></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-form-field</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex justify-content-end mt-5"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Red>PostButton</Red> <Yel>name</Yel>=<Ora>"Poster"</Ora> <Yel>v-bind</Yel>=<Ora>"</Ora>{<Pur>stateButton</Pur>}<Ora>"</Ora><Blu> /></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-form</Gre><Blu>></Blu>

                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"post-center w-75 mx-auto"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Red>Alert</Red> <Yel>v-if</Yel>=<Ora>"<Pur>message</Pur>"</Ora> <Yel>title</Yel>=<Ora>"Hmm..."</Ora> :<Yel>message</Yel>=<Ora>"<Pur>message</Pur>"</Ora> <Yel>typeMessage</Yel>=<Ora>"error"</Ora><Blu> /></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-modal</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">MenuPostDropdown - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>import</Gre> <Pur>PostButton</Pur> <Yel>from</Yel> <Ora>'../Button/PostButton.vue'</Ora>;
        <Gre>import</Gre> <Pur>Alert</Pur> <Yel>from</Yel> <Ora>'../Alert/Alert.vue'</Ora>;
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>components</Pur>: <Ora>"MenuPostDropdown"</Ora>,
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>open</Pur>: <Sau>false</Sau>,
                    <Pur>stateButton</Pur>: <Sau>false</Sau>,
                    <Pur>message</Pur>: <Sau>null</Sau>,
                    <Pur>content_post</Pur>: <Ora>""</Ora>,
                    <Pur>imageCurrentUser</Pur>: <Ora>""</Ora>,
                    <Pur>isAdmin</Pur>: <Sau>null</Sau>,
                    <Pur>idTextAreaUpdatePost</Pur>: <Ora>""</Ora>,
                }
            },
            <Pur>components</Pur>: {
                <Pur>PostButton</Pur>,
                <Pur>Alert</Pur>
            },
            <Pur>props</Pur>: {
                <Pur>post_id</Pur>: <Red>Number</Red>,
                <Pur>content</Pur>: <Red>String</Red>,
                <Pur>first_name</Pur>: <Red>String</Red>,
                <Pur>last_name</Pur>: <Red>String</Red>,
                <Pur>post_create</Pur>: <Red>String</Red>,
                <Pur>imageUrel</Pur>: <Red>String</Red>,
                <Pur>imageUser</Pur>: <Red>String</Red>,
            },
            <Blu>beforeMount</Blu> () {
                <Red>this</Red>.<Pur>content</Pur> = <Red>this</Red>.<Pur>$props</Pur>.<Blu>content</Blu>;
                <Red>this</Red>.<Pur>image</Pur> = <Red>this</Red>.<Pur>$props</Pur>.<Blu>imageUrl</Blu>;
                <Red>this</Red>.<Pur>imageCurrentUser</Pur> = <Red>this</Red>.<Pur>$props</Pur>.<Blu>imageUser</Blu>;
                <Yel>if</Yel>(<Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                    <Red>this</Red><Blu>isAdmin</Blu> = <Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)
                }
            },
            <Blu>mounted</Blu> () {
                <Yel>var</Yel> <Pur>textarea</Pur> = <Pur>document</Pur>.<Blu>getElementById</Blu>(<Red>this</Red>.<Blu>idTextAreaComment</Blu>)
                <Pur>textarea</Pur>.<Blu>addEventListener</Blu>(<Ora>'keydown'</Ora>, <Pur>autosize</Pur>)

                <Yel>function</Yel> <Blu>autosize</Blu>() {
                    <Yel>var</Yel> <Pur>el</Pur> = <Red>this</Red>
                    <Blu>setTimeout</Blu>(<Yel>function</Yel>() {
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:auto;'</Ora>
                        <Pur>el</Pur>.<Pur>style</Pur>.<Blu>cssText</Blu> = <Ora>'height:' <Yel>+</Yel> <Pur>el</Pur>.<Blu>scrollHeight</Blu> <Yel>+</Yel> 'px'</Ora>
                    }, <Blu>0</Blu>)
                }
            },
            <Pur>methods</Pur>: {
                <Blu>DeletePost</Blu> () {
                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>delete</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>`</Ora>)
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                          <Yel>var</Yel> <Pur>location</Pur> = <Pur>window</Pur>.<Pur>location</Pur>.<Pur>pathname</Pur>;
                          <Yel>if</Yel>() {
                            <Pur>window</Pur>.<Pur>history</Pur>.<Blu>back</Blu>()
                          } <Yel>else</Yel> {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                          }
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })
                },
                <Blu>modifyPostForm</Blu> () {
                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>put</Blu>(<Ora>`/post/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>`</Ora>, {
                            <Pur>content</Pur>: <Red>this</Red>.<Blu>content_post</Blu>
                      })
                      .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Yel>if</Yel>(<Pur>err</Pur>.<Pur>response</Pur>.<Pur>status</Pur> <Yel>===</Yel> <Blu>403</Blu>) {
                                <Red>this</Red>.<Blu>message</Blu> = <Ora>"Une erreur est survenue lors de la modification de votre commentaire... Éviter d'utiliser les guillemets simple"</Ora>
                            }
                      })
                },
                <Blu>moderatePost</Blu> () {
                    <Yel>if</Yel> (<Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                      <Red>this</Red>.<Blu>$axios</Blu>
                        .<Blu>put</Blu>(<Ora>`/admin/moderate/comment/<Gre>${<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>}</Gre>`</Ora>, {
                            <Pur>content</Pur>: <Red>this</Red>.<Blu>content_post</Blu>
                        })
                        .<Blu>then</Blu>(() <Yel>=></Yel>, {
                            <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                        })
                        .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                            <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                        })
                    }
                },
                <Blu>modifyPostModal</Blu> () {
                    <Red>this</Red>.<Blu>open</Blu> = <Yel>!</Yel><Red>this</Red>.<Blu>open</Blu>
                },
                <Blu>EnterText</Blu> () {
                    <Yel>var</Yel> <Pur>textarea</Pur> = <Pur>document</Pur>.<Blu>getElementById</Blu>(<Red>this</Red>.<Blu>idTextAreaUpdatePost</Blu>).<Pur>value</Pur>.<Blu>trim</Blu>()
                    <Yel>if</Yel>(<Pur>textarea</Pur>.<Pur>length</Pur> <Yel>></Yel> <Blu>1</Blu>) {
                        <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>true</Sau>
                    } <Yel>else</Yel> {
                        <Red>this</Red>.<Blu>stateButton</Blu> = <Sau>false</Sau>
                    }
                }
            },
            <Blu>created</Blu> () {
                <Red>this</Red>.<Blu>idTextAreaUpdatePost</Blu> = <Ora>'updatePost'</Ora> <Yel>+</Yel> <Red>String</Red>(<Red>this</Red>.<Pur>$props</Pur>.<Blu>post_id</Blu>)
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-form-post" role="tabpanel" aria-labelledby="v-frontend-components-form-post-tab">
                        FormPost
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-nav-link" role="tabpanel" aria-labelledby="v-frontend-components-nav-link-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - NavLink</h3>
                            <p class="code_path">~/src/components/Navigation/NavLink.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">NavLink - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>router-link</Gre> :<Yel>to</Yel>=<Ora>"<Pur>to_link</Pur>"</Ora> <Yel>class</Yel>=<Ora>"text-white item nav-link"</Ora> <Yel>exact</Yel><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"align-items-center nav-item"</Ora> <Blu>></Blu>
                <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"icon text-white"</Ora> :<Yel>class</Yel>=<Ora>"<Pur>icon</Pur>"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>span</Gre> <Yel>class</Yel>=<Ora>"text-white nav__name ml-3"</Ora><Blu>></Blu>{{ <Pur>name</Pur> }}<Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/router-link</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">NavLink - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>props</Pur>: {
                <Pur>to_link</Pur>: <Red>String</Red>,
                <Pur>name</Pur>: <Red>String</Red>,
                <Pur>icon</Pur>: <Red>String</Red>
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-nav-responsive" role="tabpanel" aria-labelledby="v-frontend-components-nav-responsive-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - NavResponsive</h3>
                            <p class="code_path">~/src/components/Navigation/NavResponsive.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">NavResponsive - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"nav-responsive"</Ora><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex justify-content-around"</Ora> <Blu>></Blu>
                <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>icon</Yel>=<Ora>"home"</Ora> <Yel>to_link</Yel>=<Ora>"/"</Ora> <Yel>isResponsive</Yel><Blu> /></Blu>
                <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>icon</Yel>=<Ora>"user outline"</Ora> <Yel>v-bind</Yel>:<Yel>to_link</Yel>=<Ora>"'/profil' <Yel>+</Yel> <Pur>user_id</Pur>"</Ora> <Yel>xact</Yel> <Yel>isResponsive</Yel><Blu>/></Blu>
                <Blu>&#60;</Blu><Red>NewPostButtonResponsive</Red><Blu> /></Blu>
                <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>icon</Yel>=<Ora>"cog"</Ora> <Yel>to_link</Yel>=<Ora>"/settings"</Ora> <Yel>isResponsive</Yel><Blu> /></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"text-white item nav-link logoutButton"</Ora> @<Yel>click</Yel>=<Ora>"<Pur>Logout</Pur>"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"align-items-center nav-item"</Ora> <Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>i</Gre> <Yel>class</Yel>=<Ora>"icon circular power off text-white shadow-none"</Ora> <Blu>></Blu><Blu>&#60;</Blu><Gre>/i</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">NavResponsive - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Gre>import</Gre> <Pur>NavLink</Pur> <Yel>from</Yel> <Ora>'./NavLink.vue'</Ora>;
    <Gre>import</Gre> <Pur>NewPostButtonResponsive</Pur> <Yel>from</Yel> <Ora>'../Button/NewPostButtonResponsive.vue'</Ora>;
    <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>components</Pur>: {
                <Pur>NavLink</Pur>,
                <Pur>NewPostButtonResponsive</Pur>
            }
            <Pur>methods</Pur>: {
                <Blu>Logout</Blu> () {
                    <Pur>sessionStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'token'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'image'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'banner'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'first_name'</Ora>)
                    <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'last_name'</Ora>)

                    <Yel>if</Yel> (<Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)) {
                        <Pur>localStorage</Pur>.<Blu>removeItem</Blu>(<Ora>'isAdmin'</Ora>)
                    }

                    <Red>this</Red>.<Pur>$store</Pur>.<Blu>commit</Blu>(<Ora>'DISCONNECT_USER'</Ora>)
                    <Pur>window</Pur>.<Pur>location</Pur>.<Blu>reload</Blu>()
                }
            },
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>user_id</Pur>: <Ora>""</Ora>
                }
            },
            <Blu>beforeMount</Blu> () {
                <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                <Red>this</Red>.<Blu>user_id</Blu> = <Pur>user_id</Pur>.<Blu>userId</Blu>
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-nav-user" role="tabpanel" aria-labelledby="v-frontend-components-nav-user-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - NavUser</h3>
                            <p class="code_path">~/src/components/Navigation/NavUser.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">NavUser - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>header</Gre> <Yel>class</Yel>=<Ora>"position-fixed w-inherit"</Ora><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"d-flex align-items-start flex-column h-100vh"</Ora> <Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"ui vertical fluid tabular menu nav-menu mx-auto mb-auto"</Ora> <Blu>></Blu>

                    <Blu>&#60;</Blu><Gre>svg</Gre> <Yel>class</Yel>=<Ora>"mb-3 ml-3"</Ora> <Yel>data-v-1084b650</Yel>=<Ora>""</Ora> <Yel>viewBox</Yel>=<Ora>"0 0 300 300"</Ora> :<Yel>style</Yel>=<Ora>"</Ora>{<Pur>width</Pur>: <Ora>'60px'</Ora>, <Pur>marginTop</Pur>: <Ora>'18px'</Ora>}<Ora>"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>g</Gre> <Yel>data-v-1084b650</Yel>=<Ora>""</Ora> <Blu>id</Blu>=<Ora>"640fb903-7c97-3a8b-d0a7-369102908d0a"</Ora> <Yel>fill</Yel>=<Ora>"#FFFFFF"</Ora> <Yel>stroke</Yel>=<Ora>"none"</Ora> <Yel>transform</Yel>=<Ora>"matrix(0.8499999999999999,0,0,0.8499999999999999,22.500006484985377,22.50005836486818)"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>svg</Gre> <Yel>xmlns</Yel>=<Ora>"http://www.w3.org/2000/svg"</Ora> <Yel>xmlns</Yel>=<Ora>"-205 207 100 100"</Ora><Blu>></Blu>
                                <Blu>&#60;</Blu><Gre>switch</Gre><Blu>></Blu>
                                    <Blu>&#60;</Blu><Gre>g</Gre><Blu>></Blu>
                                        <Blu>&#60;</Blu><Gre>path</Gre> <Yel>d</Yel>=<Ora>"M-155 298.8c11.2 0 21.7-4.3 29.6-12.2 7.9-7.9 12.2-18.4 12.2-29.6 0-11.2-4.3-21.7-12.2-29.6-7.9-7.9-18.4-12.2-29.6-12.2s-21.7 4.3-29.6 12.2c-7.9 7.9-12.2 18.4-12.2 29.6 0 11.2 4.3 21.7 12.2 29.6 7.9 7.9 18.4 12.2 29.6 12.2zm2.4-7.1c-.8.1-1.6.1-2.4.1-1.1 0-2.2-.1-3.3-.2-3.6-5.6-6.3-11.6-7.9-17.9h17.7c.6 1.5 1.7 2.9 3 3.8-1.7 5-4.1 9.7-7.1 14.2zm9.5-2c1.9-3.5 3.4-7 4.6-10.7 2.9-.6 5.2-2.6 6.3-5.3h7.7c-4 7.3-10.7 13-18.6 16zm22.8-32.7c0 3.3-.5 6.5-1.3 9.6h-10.8c-.6-1.3-1.6-2.5-2.8-3.4.2-2.2.3-4.4.3-6.6 0-3.1-.2-6.2-.6-9.2h13.8c1 3 1.4 6.3 1.4 9.6zm-4.2-16.7h-12.2c-1.3-5.5-3.2-10.7-5.8-15.7 7.6 2.9 14 8.6 18 15.7zm-17.4 16.3c0 1.7-.1 3.4-.2 5.1-2.8.6-5.1 2.4-6.2 4.9h-19.3c-.4-3-.7-6.1-.7-9.1 0-1.9.1-3.8.3-5.7 2.6-.5 4.7-2.2 6-4.4h19.5c.4 3 .6 6.1.6 9.2zm-15.7-34.2c.9-.1 1.8-.1 2.6-.1 1 0 2 0 3 .1 3.6 5.6 6.3 11.6 7.9 17.9h-17.4c-.6-1.7-1.7-3.2-3.1-4.3 1.8-4.8 4.1-9.3 7-13.6zm-9.5 2c-1.7 3.2-3.2 6.6-4.4 10-3.1.6-5.6 2.9-6.6 5.8h-7.3c3.9-7.1 10.4-12.8 18.3-15.8zm-22.6 32.6c0-3.3.5-6.6 1.4-9.6h10.9c.6 1.1 1.5 2.1 2.5 2.9-.2 2.4-.4 4.8-.4 7.2 0 3.1.2 6.1.6 9.1h-13.6c-1-3.1-1.4-6.3-1.4-9.6zm16.2 16.6c1.3 5.4 3.2 10.7 5.8 15.7-7.6-3-13.9-8.6-17.8-15.7h12z"</Ora> <Blu>></Blu><Blu>&#60;</Blu><Gre>/path</Gre><Blu>></Blu>
                                    <Blu>&#60;</Blu><Gre>/g</Gre><Blu>></Blu>
                                <Blu>&#60;</Blu><Gre>/switch</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>/svg</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/g</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/svg</Gre><Blu>></Blu>

                    <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>name</Yel>=<Ora>"Accueil"</Ora> <Yel>icon</Yel>=<Ora>"home"</Ora> <Yel>to_link</Yel>=<Ora>"/"</Ora> <Yel>isResponsive</Yel><Blu> /></Blu>
                    <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>name</Yel>=<Ora>"Profil"</Ora> <Yel>icon</Yel>=<Ora>"user outline"</Ora> <Yel>v-bind</Yel>:<Yel>to_link</Yel>=<Ora>"'/profil' <Yel>+</Yel> <Pur>user_id</Pur>"</Ora> <Yel>xact</Yel> <Yel>isResponsive</Yel><Blu>/></Blu>
                    <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>name</Yel>=<Ora>"Paramètres"</Ora> <Yel>icon</Yel>=<Ora>"cog"</Ora> <Yel>to_link</Yel>=<Ora>"/settings"</Ora> <Yel>isResponsive</Yel><Blu> /></Blu>
                    <Blu>&#60;</Blu><Red>NavLink</Red> <Yel>name</Yel>=<Ora>"Analyse"</Ora> <Yel>icon</Yel>=<Ora>"code"</Ora> <Yel>to_link</Yel>=<Ora>"/analyse"</Ora> <Yel>isResponsive</Yel><Blu> /></Blu>
                    <Blu>&#60;</Blu><Red>NewPostButton</Red><Blu> /></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>class</Yel>=<Ora>"menu nav-menu mx-auto mb-5"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Red>LogoutButton</Red><Blu> /></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/header</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">NavUser - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Gre>import</Gre> <Pur>NavLink</Pur> <Yel>from</Yel> <Ora>'./NavLink.vue'</Ora>;
    <Gre>import</Gre> <Pur>NewPostButton</Pur> <Yel>from</Yel> <Ora>'../Button/NewPostButton.vue'</Ora>;
    <Gre>import</Gre> <Pur>LogoutButton</Pur> <Yel>from</Yel> <Ora>'../Button/LogoutButton.vue'</Ora>;
    <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Pur>components</Pur>: {
                <Pur>NavLink</Pur>,
                <Pur>NewPostButton</Pur>
                <Pur>LogoutButton</Pur>
            }
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>user_id</Pur>: <Ora>""</Ora>
                }
            },
            <Blu>beforeMount</Blu> () {
                <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)

                <Red>this</Red>.<Blu>user_id</Blu> = <Pur>user_id</Pur>.<Blu>userId</Blu>
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-card-comment" role="tabpanel" aria-labelledby="v-frontend-components-card-comment-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Components - CardComment</h3>
                            <p class="code_path">~/src/components/CardComment.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">CardComment - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>section</Gre> <Yel>class</Yel>=<Ora>"post-center"</Ora> <Yel>v-if</Yel>=<Ora>"<Pur>comments</Pur>"</Ora><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>sui-comment-group</Gre> <Yel>v-for</Yel>=<Ora>"<Pur>comment</Pur> <Yel>in</Yel> <Pur>comments</Pur>"</Ora> :<Yel>key</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>comment_id</Blu>"</Ora> <Yel>minimal</Yel> <Yel>class</Yel>=<Ora>"w-100 m-0 p-3 comment-hover"</Ora> :<Yel>class</Yel>=<Ora>"<Pur>currentUser</Pur> <Yel>===</Yel> <Pur>comment</Pur>.<Blu>user_id</Blu> <Yel>?</Yel> 'comment-current-user' <Yel>:</Yel> ''"</Ora> <Blu>></Blu>
                <Blu>&#60;</Blu><Gre>sui-comment</Gre> <Yel>class</Yel>=<Ora>"d-flex"</Ora> <Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
                    
                    <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-comment-content</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>router-link</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu><Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/router-link</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-comment-metadata</Gre><Blu>></Blu>
                            <Blu>&#60;</Blu><Gre>span</Gre><Blu>></Blu><Blu>&#60;</Blu><Gre>/span</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-comment-metadata</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-comment-text</Gre> <Yel>class</Yel>=<Ora>"text-whhite"</Ora><Blu>></Blu>{{ <Pur>comment</Pur> }}<Blu>&#60;</Blu><Gre>/sui-comment-text</Gre><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>sui-comment-actions</Gre> <Yel>v-if</Yel>=<Ora>"<Pur>currentUser</Pur> <Yel>===</Yel> <Pur>comment</Pur>.<Blu>user_id</Blu> <Yel>||</Yel> <Pur>user_permission</Pur> <Yel>==</Yel> <Blu>1</Blu>"</Ora><Blu>></Blu>
                            <Blu>&#60;</Blu><Red>MenuCommentDropdown</Red>
                                <Yel>v-bind</Yel>:<Yel>comment_id</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>comment_id</Blu>"</Ora>
                                <Yel>v-bind</Yel>:<Yel>first_name</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>first_name</Blu>"</Ora>
                                <Yel>v-bind</Yel>:<Yel>last_name</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>last_name</Blu>"</Ora>
                                <Yel>v-bind</Yel>:<Yel>imageUser</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>imageUser</Blu>"</Ora>
                                <Yel>v-bind</Yel>:<Yel>comment_create</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>comment_create</Blu>"</Ora>
                                <Yel>v-bind</Yel>:<Yel>comment</Yel>=<Ora>"<Pur>comment</Pur>.<Blu>comment</Blu>"</Ora>
                            <Blu> /></Blu>
                        <Blu>&#60;</Blu><Gre>/sui-comment-actions</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-comment-content</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-comment</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/sui-comment-group</Gre><Blu>></Blu>

            <Blu>&#60;</Blu><Gre>div</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>p</Gre><Blu>></Blu>{{ <Pur>message</Pur> }}<Blu>&#60;</Blu><Gre>/p</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/section</Gre><Blu>></Blu>
    <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>

                            <div class="code_display ">
<h4 class="h2 text-white">CardComment - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
    <Gre>import</Gre> <Pur>MenuCommentDropdown</Pur> <Yel>from</Yel> <Ora>'../Dropdown/MenuCommentDropdown.vue'</Ora>;
    <Gre>import</Gre> <Pur>jwt</Pur> <Yel>from</Yel> <Ora>'jsonwebtoken'</Ora>;
    <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
        <Gre>export</Gre> <Yel>default</Yel> {
            <Blu>data</Blu> () {
                <Yel>return</Yel> {
                    <Pur>loading</Pur>: <Sau>false</Sau>,
                    <Pur>comments</Pur>: [],
                    <Pur>message</Pur>: <Ora>""</Ora>,
                    <Pur>currentUser</Pur>: <Ora>""</Ora>,
                    <Pur>user_permission</Pur>: <Ora>""</Ora>
                }
            },
            <Pur>components</Pur>: {
                <Pur>MenuCommentDropdown</Pur>
            },
            <Pur>props</Pur>: {
                <Pur>post_id</Pur>: <Red>Number</Red>,
                <Pur>user_id</Pur>: <Red>Number</Red>,
            },
            <Pur>methods</Pur>: {
                <Blu>getAllComment</Blu> () {
                    <Red>this</Red>.<Blu>$axios</Blu>
                      .<Blu>get</Blu>(<Ora>`/post/<Gre>${</Gre><Red>this</Red><Pur>$route</Pur>.<Pur>params</Pur>.<Blu>post_id</Blu><Gre>}</Gre>/comment`</Ora>)
                      .<Blu>then</Blu>(<Pur>res</Pur> <Yel>=></Yel>, {
                        <Red>this</Red>.<Blu>comments</Blu> = <Pur>res</Pur>.<Pur>data</Pur>.<Blu>result</Blu>
                        <Yel>if</Yel>(<Pur>res</Pur>.<Pur>data</Pur>.<Blu>message</Blu>) {
                            <Red>this</Red>.<Blu>message</Blu> = <Pur>res</Pur>.<Pur>data</Pur>.<Blu>message</Blu>
                        }
                      })
                      .<Blu>then</Blu>(<Pur>res</Pur> <Yel>=></Yel>, {
                          <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)
                          <Yel>let</Yel> <Pur>user_id</Pur> = <Pur>jwt</Pur>.<Blu>verify</Blu>(<Pur>token</Pur>, <Ora>"!$!_Gr0uPoM4n1a_$€Cr3T_kEy_!$!"</Ora>)
                          <Red>this</Red>.<Blu>currentUser</Blu> = <Pur>user_id</Pur>.<Blu>userId</Blu>
                        }
                      })
                      .<Blu>catch</Blu>(<Pur>err</Pur> <Yel>=></Yel>, {
                          <Red>console</Red>.<Blu>log</Blu>(<Pur>err</Pur>)
                      })

                },
            },
            <Blu>beforeMount</Blu> () {
                <Yel>if</Yel>(<Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>) {
                    <Red>this</Red>.<Blu>user_permission</Blu> = <Pur>localStorage</Pur>.<Blu>getItem</Blu>(<Ora>'isAdmin'</Ora>
                }
                <Red>this</Red>.<Blu>getAllComment</Blu>()
            },
        }
    <Blu>&#60;</Blu><Gre>/script</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-components-card-post" role="tabpanel" aria-labelledby="v-frontend-components-card-post-tab">
                        CardPost
                    </div>

                    <div class="tab-pane fade" id="v-frontend-router-index" role="tabpanel" aria-labelledby="v-frontend-router-index-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Router - index.js</h3>
                            <p class="code_path">~/src/router/index.js</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Router</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
        <Gre>import</Gre> <Pur>Vue</Pur> <Yel>from</Yel> <Ora>'vue'</Ora>;
        <Gre>import</Gre> <Pur>VueRouter</Pur> <Yel>from</Yel> <Ora>'vue-router'</Ora>;
        <Gre>import</Gre> <Pur>Login</Pur> <Yel>from</Yel> <Ora>'../views/Login.vue'</Ora>;
        <Gre>import</Gre> <Pur>Signup</Pur> <Yel>from</Yel> <Ora>'../views/Signup.vue'</Ora>;
        <Gre>import</Gre> <Pur>Accueil</Pur> <Yel>from</Yel> <Ora>'../views/Accueil.vue'</Ora>;
        <Gre>import</Gre> <Pur>Profil</Pur> <Yel>from</Yel> <Ora>'../views/Profil.vue'</Ora>;
        <Gre>import</Gre> <Pur>Post</Pur> <Yel>from</Yel> <Ora>'../views/Post.vue'</Ora>;
        <Gre>import</Gre> <Pur>Settings</Pur> <Yel>from</Yel> <Ora>'../views/Settings.vue'</Ora>;
        <Gre>import</Gre> <Pur>NotFound</Pur> <Yel>from</Yel> <Ora>'../views/NotFound.vue'</Ora>;

        <Red>Vue</Red>.<Blu>use</Blu>(<Red>VueRouter</Red>);

        <Yel>const</Yel> <Pur>routes</Pur> = [
            {
                <Blu>path</Blu>: <Ora>'/login'</Ora>,
                <Blu>name</Blu>: <Ora>'Login'</Ora>,
                <Blu>component</Blu>: <Pur>Login</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Accueil'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'/signup'</Ora>,
                <Blu>name</Blu>: <Ora>'Signup'</Ora>,
                <Blu>component</Blu>: <Pur>Signup</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Accueil'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'/settings'</Ora>,
                <Blu>name</Blu>: <Ora>'Settings'</Ora>,
                <Blu>component</Blu>: <Pur>Settings</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (!<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Login'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'/'</Ora>,
                <Blu>name</Blu>: <Ora>'Accueil'</Ora>,
                <Blu>component</Blu>: <Pur>Accueil</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (!<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Login'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'/profil/:user_id(<Cya>\\</Cya>d+)'</Ora>,
                <Blu>name</Blu>: <Ora>'Profil'</Ora>,
                <Blu>component</Blu>: <Pur>Profil</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (!<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Login'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'/post/:post_id(<Cya>\\</Cya>d+)'</Ora>,
                <Blu>name</Blu>: <Ora>'Post'</Ora>,
                <Blu>component</Blu>: <Pur>Post</Pur>,
                <Cya>beforeEnter</Cya> (<Pur>route</Pur>, <Pur>redirect</Pur>, <Pur>next</Pur>) {
                    <Yel>let</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);
                    <Yel>if</Yel> (!<Pur>token</Pur>) {
                        <Blu>next</Blu>({
                            <Blu>next</Blu>: <Ora>'Login'</Ora>
                        })
                    } <Yel>else</Yel> {
                        <Blu>next</Blu>()
                    }
                }
            }, {
                <Blu>path</Blu>: <Ora>'*'</Ora>,
                <Blu>component</Blu>: <Ora>NotFound</Ora>,
            }
        ]

        <Yel>const</Yel> <Pur>router</Pur> = <Yel>new</Yel> <Red>VueRouter</Red>({
            <Blu>mode</Blu>: <Ora>'history'</Ora>,
            <Blu>routes</Blu>
        })

        <Gre>export</Gre> <Yel>default</Yel> <Pur>router</Pur>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-store-index" role="tabpanel" aria-labelledby="v-frontend-store-index-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Store - index.js</h3>
                            <p class="code_path">~/src/store/index.js</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Store</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
        <Gre>import</Gre> <Pur>Vue</Pur> <Yel>from</Yel> <Ora>'vue'</Ora>;
        <Gre>import</Gre> <Pur>Vuex</Pur> <Yel>from</Yel> <Ora>'vuex'</Ora>;

        <Red>Vue</Red>.<Blu>use</Blu>(<Pur>Vuex</Pur>);

        <Gre>export</Gre> <Yel>default</Yel> <Yel>new</Yel> <Pur>Vuex</Pur>.<Red>Store</Red>({
            <Blu>state</Blu>: {
                <Blu>connected</Blu>: <Sau>false</Sau>,
                <Blu>currentUser</Blu>: [],
                <Blu>posts</Blu>: [],
                <Blu>post</Blu>: [],
                <Blu>postsUser</Blu>: [],
                <Blu>user</Blu>: [],
            },
            <Blu>mutations</Blu>: {
                <Cya>CONNECT_USER</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>connected</Blu> = <Sau>true</Sau>
                    <Pur>state</Pur>.<Blu>user</Blu> = <Pur>payload</Pur>
                },
                <Cya>GET_USER_DATA</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>connected</Blu> = <Sau>true</Sau>
                    <Pur>state</Pur>.<Blu>user</Blu> = <Pur>payload</Pur>
                },
                <Cya>DISCONNECT_USER</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>connected</Blu> = <Sau>false</Sau>
                    <Pur>state</Pur>.<Blu>user</Blu> = <Pur>payload</Pur>
                },
                <Cya>GET_ALL_POST</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>posts</Blu> = <Pur>payload</Pur>
                },
                <Cya>GET_ALL_POST_OF_CURRENT_USER</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>postsUser</Blu> = <Pur>payload</Pur>
                },
                <Cya>GET_ONE_POST</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>post</Blu> = <Pur>payload</Pur>
                },
                <Cya>CREATE_POST</Cya>(<Pur>state</Pur>, <Pur>payload</Pur>) {
                    <Pur>state</Pur>.<Blu>posts</Blu> = {
                        <Yel>...</Yel><Pur>state</Pur>.<Blu></Blu> += <Pur>payload</Pur>
                    }
                },
            },
            <Blu>getters</Blu>: {

            },
            <Blu>actions</Blu>: {

            },
            <Blu>modules</Blu>: {

            },
        })
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-accueil" role="tabpanel" aria-labelledby="v-frontend-view-accueil-tab">
                        Accueil
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-login" role="tabpanel" aria-labelledby="v-frontend-view-login-tab">
                        Login
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-not-found" role="tabpanel" aria-labelledby="v-frontend-view-not-found-tab">
                        NotFound
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-post" role="tabpanel" aria-labelledby="v-frontend-view-post-tab">
                        Post
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-profil" role="tabpanel" aria-labelledby="v-frontend-view-profil-tab">
                        Profil
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-settings" role="tabpanel" aria-labelledby="v-frontend-view-settings-tab">
                        Settings
                    </div>
                    <div class="tab-pane fade" id="v-frontend-view-signup" role="tabpanel" aria-labelledby="v-frontend-view-signup-tab">
                        Signup
                    </div>
                    <div class="tab-pane fade" id="v-frontend-configurations-app" role="tabpanel" aria-labelledby="v-frontend-configurations-app-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Configurations - App.vue</h3>
                            <p class="code_path">~/src/App.vue</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">App.vue - Template</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
        <Blu>&#60;</Blu><Gre>template</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>div</Gre> <Blu>id</Blu>=<Ora>"app"</Ora><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>sui-grid</Gre> <Yel>celled</Yel>=<Ora>"internally"</Ora> <Yel>v-if</Yel>=<Ora>"<Pur>connected</Pur>"</Ora><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-grid-column</Gre> :<Yel>width</Yel>=<Ora>"<Blu>4</Blu>"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Red>NavUser </Red><Blu>/></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-grid-column</Gre><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>sui-grid-column</Gre> :<Yel>width</Yel>=<Ora>"<Blu>11</Blu>"</Ora><Blu>></Blu>
                        <Blu>&#60;</Blu><Gre>router-view </Gre><Blu>/></Blu>
                    <Blu>&#60;</Blu><Gre>/sui-grid-column</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>/sui-grid</Gre><Blu>></Blu>
                <Blu>&#60;</Blu><Gre>div</Gre> <Yel>v-else</Yel><Blu>></Blu>
                    <Blu>&#60;</Blu><Gre>router-view </Gre><Blu>/></Blu>
                <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
            <Blu>&#60;</Blu><Gre>/div</Gre><Blu>></Blu>
        <Blu>&#60;</Blu><Gre>/template</Gre><Blu>></Blu>
    </code> </pre>
</figure>
                            </div>
                            <div class="code_display ">
<h4 class="h2 text-white">App.vue - Script</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
        <Blu>&#60;</Blu><Gre>script</Gre><Blu>></Blu>
            <Gre>import</Gre> <Pur>NavUser</Pur> <Yel>from</Yel> <Ora>'./components/Navigation/NavUser.vue'</Ora>;
            <Gre>import</Gre> { <Pur>mapState</Pur> } <Yel>from</Yel> <Ora>'vuex'</Ora>;
            
            <Gre>export</Gre> <Yel>default</Yel> {
                <Blu>data</Blu> () {
                    <Yel>return</Yel> {
                        <Pur>connected</Pur>: <Sau>false</Sau>
                    }
                },
                <Blu>mounted</Blu> () {
                    <Yel>if</Yel> (<Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>)) {
                        <Red>this</Red>.<Blu>connected</Blu> = <Sau>true</Sau>
                    }
                },
                <Pur>components</Pur>: {
                    <Pur>NavUser</Pur>
                },
                <Pur>computed</Pur>: {
                    <Yel>...</Yel><Blu>mapState</Blu>([
                        <Ora>'user'</Ora>
                    ])
                },
            }
        <Blu>&#60;</Blu><Gre>script</Gre><Blu>/></Blu>
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                    <div class="tab-pane fade" id="v-frontend-configurations-main" role="tabpanel" aria-labelledby="v-frontend-configurations-main-tab">
                        <div class="header mb-5">
                            <h3 class="text-white display-4">Configurations - main.js</h3>
                            <p class="code_path">~/src/main.js</p>
                        </div>
                        <article class="mb-5">
                            <div class="code_display ">
<h4 class="h2 text-white">Main</h4>

<figure class="code__analyse">
    <pre><code class="text-white">
        <Gre>import</Gre> <Pur>Vue</Pur> <Yel>from</Yel> <Ora>'vue'</Ora>;
        <Gre>import</Gre> <Pur>App</Pur> <Yel>from</Yel> <Ora>'./App.vue'</Ora>;
        <Gre>import</Gre> <Pur>store</Pur> <Yel>from</Yel> <Ora>'./store'</Ora>;
        <Gre>import</Gre> <Pur>router</Pur> <Yel>from</Yel> <Ora>'./router'</Ora>;
        <Gre>import</Gre> <Pur>axios</Pur> <Yel>from</Yel> <Ora>'axios'</Ora>;

        <Gre>import</Gre> <Pur>SuiVue</Pur> <Yel>from</Yel> <Ora>'semantic-ui-vue'</Ora>;

        <Pur>axios</Pur>.<Pur>defaults</Pur>.<Blu>baseURL</Blu> = <Ora>"http://localhost:3000/api/"</Ora>;
        <Yel>const</Yel> <Pur>token</Pur> = <Pur>sessionStorage</Pur>.<Blu>getItem</Blu>(<Ora>'token'</Ora>);

        <Yel>if</Yel> (<Pur>token</Pur>) {
            <Pur>axios</Pur>.<Pur>defaults</Pur>.<Pur>headers</Pur>.<Blu>common</Blu>[<Ora>'Authorization'</Ora>] = <Ora>'Bearer '</Ora> <Yel>+</Yel> <Pur>token</Pur>;
        }

        <Pur>Vue</Pur>.<Pur>prototype</Pur>.<Blu>$axios</Blu> = <Pur>axios</Pur>;
        <Pur>Vue</Pur>.<Blu>use</Blu>(<Pur>SuiVue</Pur>)

        <Pur>Vue</Pur>.<Pur>config</Pur>.<Blu>productionTip</Blu> = <Sau>false</Sau>;

        <Yel>new</Yel> <Pur>Vue</Pur>({
            <Blu>store</Blu>,
            <Blu>router</Blu>,
            <Blu>render</Blu>: <Pur>h</Pur> <Yel>=></Yel> <Blu>h</Blu>(<Pur>App</Pur>)
        }).<Blu>$mount</Blu>(<Ora>'#app'</Ora>)
    </code> </pre>
</figure>
                            </div>
                        </article>
                    </div>
                </div>
        </div>
    </div>
</div>

</template>

<script>
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/jquery/dist/jquery';
import NavAccordion from "./../components/Accordion/NavAccordion"
import NavAccordionThird from "./../components/Accordion/NavAccordionThird"
import Blu from "../components/Analyse/Blu";
import Gre from "../components/Analyse/Gre";
import Ora from "../components/Analyse/Ora";
import Pur from "../components/Analyse/Pur";
import Red from "../components/Analyse/Red";
import Yel from "../components/Analyse/Yel";
import Sau from "../components/Analyse/Sau";
import Cya from "../components/Analyse/Cya";

export default {
    components: {
        NavAccordion,
        NavAccordionThird,
        Blu,
        Gre,
        Ora,
        Pur,
        Red,
        Yel,
        Sau,
        Cya
    }
}
</script>

<style lang="scss">
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    .code__analyse {
        background-color: #362d46;
        border-radius: .25rem !important;   
    }
    .code__strcuture {
        background-color: #262626;
        border-radius: .25rem !important;   
    }
    .code_path {
        color : #ab8ce4;
        margin: 0;
    }
    * {
     text-decoration: none !important
    }
    // a.nav-link {
    //     color: #fff
    // }
    button.collapsed, .nav-link {
        color: #808080 !important
    }
    button:not(.collapsed), .nav-link.active{
        color: #fff !important
    }
    .btn.focus, .btn:focus {
        box-shadow: none;
    }
</style>