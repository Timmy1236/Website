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

interface PanelAttrs {
  title: string
  content?: m.Children
}

export const TabPanel: m.ClosureComponent<TabPanelAttrs> = () => {
  let activeTab = 0;
  let closed = false;
  let collapsed = false;

  return {
    oninit(vnode) {
      activeTab = vnode.attrs.defaultTab || 0;
    },

    view(vnode) {
      if (closed) return null;
      const { tabs = [], title, outTab } = vnode.attrs;

      return m(".panel-frame", { class: collapsed ? "collapsed" : "" }, [
        m(".panel.tabs", [
          // HEADER
          m(".panel-header", [
            m("h1", title),
            m(".panel-controls", [
              m("button.panel-button", { tabindex: "-1", onclick: () => { collapsed = !collapsed; } }, "―"),
              m("button.panel-button", { tabindex: "-1", onclick: () => { closed = true; } }, "X")
            ])
          ]),
          // TABS BAR
          m(".panel-tabs", { class: collapsed ? "collapsed" : "" },
            tabs.map((tab, index) =>
              m("button.panel-tab", { class: [activeTab === index ? "active" : "", collapsed ? "collapsed" : ""].filter(Boolean).join(" "), onclick: () => { activeTab = index; } }, tab.label)
            )
          ),
          // CONTENT
          m(".panel-content.tabs", { class: collapsed ? "collapsed" : "" }, [tabs[activeTab]?.content?.(), outTab || null])
        ])
      ]);
    }
  };
};

export const panel: m.ClosureComponent<PanelAttrs> = () => {
  let closed = false;
  let collapsed = false;

  return {
    view(vnode) {
      if (closed) return null;
      const { content, title } = vnode.attrs;

      return m(".panel-frame", { class: collapsed ? "collapsed" : "" }, [
        m(".panel", [
          // HEADER
          m(".panel-header", [
            m("h1", title),
            m(".panel-controls", [
              m("button.panel-button", { tabindex: "-1", onclick: () => { collapsed = !collapsed; } }, "―"),
              m("button.panel-button", { tabindex: "-1", onclick: () => { closed = true; } }, "X")
            ])
          ]),
          // CONTENT
          m(".panel-content", { class: collapsed ? "collapsed" : "" }, [content])
        ])
      ]);
    }
  };
};
