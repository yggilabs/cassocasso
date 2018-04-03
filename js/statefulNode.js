class StatefulNode {
  static get toggle() { return 0 }

  set active(value) {
    if(value === true) {
      StatefulNode._activate(this._node, this._className)
    } else if (value === false) {
      StatefulNode._deactivate(this._node, this._className)
    } else if (value === StatefulNode.toggle) {
      StatefulNode._toggle(this._node, this._className)
    }
  }

  constructor(node, className = 'active', init) {
    this._node = node
    this._className = className

    StatefulNode._activate(this._node, 'upgraded')

    if (init === true) {
      StatefulNode._activate(this._node, this._className)
    } else if (init === false) {
      StatefulNode._deactivate(this._node, this._className)
    }
  }

  static _activate(node, className) {
    node.classList.add(className)
  }

  static _deactivate(node, className) {
    node.classList.remove(className)
  }

  static _toggle(node, className) {
    node.classList.toggle(className)
  }
}
