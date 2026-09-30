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

export const panel: m.ClosureComponent<PanelAttrs> = () => {
  return {
    view(vnode: m.Vnode<PanelAttrs>) {
      const { content, title } = vnode.attrs;
      return m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("h1", title),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize", tabindex: "-1" }, "―"),
              m("button.panel-button", { "data-panel-action": "close", tabindex: "-1" }, "X")
            ])
          ]),

          m(".panel-content", [
            content
          ])
        ])
      ]);
    }
  };
};

export function initPanelButtons() {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement)) return;

    const btn = event.target.closest("[data-panel-action]");
    if (!(btn instanceof HTMLElement)) return;

    const panel = btn.closest(".panel");
    if (!(panel instanceof HTMLElement)) return;

    const frame = panel.closest(".panel-frame");
    const action = btn.dataset.panelAction;

    if (action === "minimize") {
      const content = panel.querySelector(".panel-content");
      if (!(content instanceof HTMLElement)) return;

      content.classList.toggle("collapsed");
      const isCollapsed = content.classList.contains("collapsed");

      frame?.classList.toggle("collapsed", isCollapsed);
    }

    if (action === "close") {
      const target = frame || panel;
      const grid = target.closest(".panel-grid-2");

      target.remove();

      if (grid instanceof HTMLElement && grid.children.length === 0) {
        grid.remove();
      }
    }
  });
}
