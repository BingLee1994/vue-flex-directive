
const horizon = ['left', 'center', 'right']
const verticle = ['top', 'middle', 'bottom']
const styleMap = {
  left: 'flex-start',
  top: 'flex-start',
  middle: 'center',
  center: 'center',
  bottom: 'flex-end',
  right: 'flex-end',
}

const flexContainer = {
  name: "flex",
  option: {
    bind(el, { arg, value, modifiers = {} }) {
      let {
        wrap,
        inline,
        column,
        center,
        reverse,
        spaceBetween,
        spaceAround,
        strech,
        noScroll,
        ...rest
      } = modifiers;

      console.log(rest);
      let style = {
        display: inline ? "inline-flex" : "flex",
        flexDirection: column ? "column" : "row",
      };

      reverse && (style.flexDirection = style.flexDirection + "-reverse");
      spaceBetween && (style.justifyContent = "space-between");
      spaceAround && (style.justifyContent = "space-around");
      strech && (style.justifyContent = "strech");

      let horizonProp = column ? "alignItems" : "justifyContent";
      let verticleProp = column ? "justifyContent" : "alignItems";
    
      for (let modifier in rest) {
        modifier = modifier.replace('to', '').toLocaleLowerCase()
        let mached = horizon.find(h => modifier.includes(h))
        if (mached) {
          style[horizonProp] = styleMap[mached]
        }
        mached = verticle.find(v => modifier.includes(v))
        if (mached) {
          style[verticleProp] = styleMap[mached]
        }
      }

      center &&
        ((style[verticleProp] = "center"), (style[horizonProp] = "center"));

      noScroll && (style.overflow = "hidden");

      wrap && (style.flexWrap = "wrap");

      for (let styleName in style) {
        el.style[styleName] = style[styleName];
      }

      if (arg) {
        el.style[arg] = value;
      }
    },
  },
};

const flexItem = {
  name: "flex-item",
  option: {
    bind(el, { value, modifiers }) {
      if (modifiers[1]) {
        el.style.flex = "1";
      }
      if (modifiers[0]) {
        el.style.flex = "0";
      }
      if (value) {
        el.style.flex = value;
      }
    },
  },
};

  export { flexContainer }