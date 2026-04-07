import m from "mithril";

const TabPanel = {
  activeTab: 0,

  oninit(vnode: any) {
    this.activeTab = vnode.attrs.defaultTab || 0;
  },

  view(vnode: any) {
    const tabs = vnode.attrs.tabs || [];

    return m(".panel tabs", [

      // HEADER
      m(".panel-header", [
        m("h1.text-title", vnode.attrs.title || "Tabs"),

        m(".panel-controls", [
          m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
          m("button.panel-button", { "data-panel-action": "close" }, "X")
        ])
      ]),

      // TABS BAR
      m(".panel-tabs",
        tabs.map((tab: any, index: any) =>
          m("button.panel-tab", {
            class: this.activeTab === index ? "active" : "",
            onclick: () => {
              this.activeTab = index;
            }
          }, tab.label)
        )
      ),

      // CONTENT
      m(".panel-content tabs", [
        tabs[this.activeTab]?.content?.(),
        vnode.attrs.outTab || null
      ])
    ]);
  }
};

export default TabPanel;