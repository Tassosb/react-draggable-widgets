# Components
- App
  - WidgetDropDown
  - Header
    - Logo
    - MainNav
    - SideNav
  - DashboardNav
  - Main
    - DashboardControl
      - DashboardTitleForm
      - DashboardSwitcher
      - AddWidget
    - WidgetDisplay
      - WidgetOne
      - WidgetTwo
      - WidgetThree
    - AddWidget
    - Footer

# Sample State
```
{
  entities: {
    widgets: {
      byId: {
        1: {
          data: {

          },
          title: "Food Groups by Country",
          description: "Most common food groups",
          width: 1
        },
        2: {
          data: {

          },
          title: "Type of Diet",
          description: "Most common food types and diets",
          width: 2
        }
      },
      allIds: [1, 2]
    }
  },
  session: {
    currentUser: "John Jones"
  },
  nav: {
    currentTab: 1
  },
  errors: {
    widget: {
      title: "25 characters max"
    }
  },
  dropDown: {
    show: false
  },
  inProgress: {
    selectedWidget: {
      type: 'bar',
      width: 1
    },
    title: "Common Food",
    description: "Most common food types"
  }
}
```
