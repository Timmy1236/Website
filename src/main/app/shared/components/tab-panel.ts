import m from "mithril";

interface Tab {
  label: string
  content: () => m.Children
}

interface TabPanelAttrs {
  title: string
  defaultTab?: number
  tabs: Tab[]
  outTab?: m.Children
}

const TabPanel: m.ClosureComponent<TabPanelAttrs> = () => {
  let activeTab = 0;

  return {
    oninit(vnode: m.Vnode<TabPanelAttrs>) {
      activeTab = vnode.attrs.defaultTab || 0;
    },

    view(vnode: m.Vnode<TabPanelAttrs>) {
      const { tabs = [], title, outTab } = vnode.attrs;

      return m(".panel.tabs", [

        // HEADER
        m(".panel-header", [
          typeof title === "string"
            ? m("p", title)
            : m("p", title, "Tabs"),

          m(".panel-controls", [
            m("button.panel-button", { "data-panel-action": "minimize" }, "―"),
            m("button.panel-button", { "data-panel-action": "close" }, "X")
          ])
        ]),

        // TABS BAR
        m(".panel-tabs",
          tabs.map((tab, index) =>
            m("button.panel-tab", {
              class: activeTab === index ? "active" : "",
              onclick: () => { activeTab = index; }
            }, tab.label)
          )
        ),

        // CONTENT
        m(".panel-content.tabs", [
          tabs[activeTab]?.content?.(),
          outTab || null
        ])
      ]);
    }
  };
};

export default TabPanel;
