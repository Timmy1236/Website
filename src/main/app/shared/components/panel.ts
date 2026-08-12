import m from "mithril";

interface PanelAttrs {
  title: string
  content?: m.Children
}

const panel: m.ClosureComponent<PanelAttrs> = () => {
  return {
    view(vnode: m.Vnode<PanelAttrs>) {
      const { content, title } = vnode.attrs;
      return m(".panel-frame", [
        m(".panel", [
          m(".panel-header", [
            m("p.text-title", title),
            m(".panel-controls", [
              m("button.panel-button", { "data-panel-action": "minimize" }, "▼"),
              m("button.panel-button", { "data-panel-action": "close" }, "X")
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

export default panel;
