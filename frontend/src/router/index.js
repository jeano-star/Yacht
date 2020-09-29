import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Templates from "../views/Templates.vue";
import TemplatesShow from "../components/templates/TemplatesDetails.vue";
import TemplatesForm from "../components/templates/TemplatesForm.vue";
import TemplatesList from "../components/templates/TemplatesList.vue";
import Applications from "../views/Applications.vue";
import AppContent from "../components/applications/ApplicationDetailsComponents/AppContent.vue";
import AppProcesses from "../components/applications/ApplicationDetailsComponents/AppProcesses.vue";
import AppLogs from "../components/applications/ApplicationDetailsComponents/AppLogs.vue";
import AppStats from "../components/applications/ApplicationDetailsComponents/AppStats.vue";
import ApplicationDetails from "../components/applications/ApplicationDetails.vue";
import ApplicationsList from "../components/applications/ApplicationsList.vue";
import ApplicationsForm from "../components/applications/ApplicationsForm.vue";
import Container from "../views/Container.vue";
import UserSettings from "../views/UserSettings.vue";
import ChangePasswordForm from "../components/userSettings/ChangePasswordForm.vue";
import UserInfo from "../components/userSettings/UserInfo.vue";
import ServerSettings from "../views/ServerSettings.vue";
<<<<<<< HEAD
import ServerInfo from "../components/serverSettings/ServerInfo.vue"
import ServerVariables from "../components/serverSettings/ServerVariables.vue"
import Compose from "../views/Compose.vue";
import ComposeEditor from "../components/compose/ComposeEditor.vue";
import ComposeForm from "../components/compose/ComposeForm.vue";
import ComposeList from "../components/compose/ComposeList.vue";
=======
import ServerInfo from "../components/serverSettings/ServerInfo.vue";
import ServerVariables from "../components/serverSettings/ServerVariables.vue";
import Prune from "../components/serverSettings/Prune.vue";
>>>>>>> ff5cde45e70a3c82a1e2f714da6e769b5bee580a

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/templates",
    // name: "Templates",
    component: Templates,
    children: [
      {
        path: "",
        name: "View Templates",
        component: TemplatesList // perhaps rename to TemplatesIndex
      },
      {
        path: "new",
        name: "New Template",
        component: TemplatesForm // perhaps rename to TemplatesCreate
      },
      {
        path: ":templateId",
        name: "Template Details",
        component: TemplatesShow // perhaps rename to TemplateDetails
      }
    ]
  },
  {
    path: "/apps",
    component: Applications,
    children: [
      {
        name: "Deploy",
        path: "deploy/:appId",
        component: ApplicationsForm
      },
      {
        name: "View Applications",
        path: "/",
        component: ApplicationsList
      },
      {
        name: "Add Application",
        path: "deploy",
        component: ApplicationsForm
      },
      {
        path: ":appName",
        component: ApplicationDetails,
        children: [
          {
            name: "Processes",
            path: "top",
            component: AppProcesses
          },
          {
            name: "Info",
            path: "info",
            component: AppContent
          },
          {
            name: "Logs",
            path: "logs",
            component: AppLogs
          },
          {
            name: "Stats",
            path: "stats",
            component: AppStats
          }
        ]
      }
    ]
  },
  {
    path: "/compose",
    component: Compose,
    children: [
      {
        name: "Compose Editor",
        path: "edit",
        component: ComposeEditor,
      },
      {
        name: "Compose Downloader",
        path: "dl",
        component: ComposeForm
      },
      {
        name: "Compose List",
        path: "/",
        component: ComposeList
      }
    ]
  },
  {
    path: "/user",
    component: UserSettings,
    children: [
      {
        name: "User Info",
        path: "info",
        component: UserInfo
      },
      {
        name: "Change Password",
        path: "changePassword",
        component: ChangePasswordForm
      }
    ]
  },
  {
    path: "/settings",
    component: ServerSettings,
    children: [
      {
        name: "Server Info",
        path: "info",
        component: ServerInfo
      },
      {
        name: "Template Variables",
        path: "templateVariables",
        component: ServerVariables
      },
      {
        name: "Prune",
        path: "prune",
        component: Prune
      }
    ]
  },
  {
    path: "/images",
    name: "Images",
    component: Container
  }
];

const router = new VueRouter({
  mode: "hash",
  base: "",
  routes
});

export default router;
