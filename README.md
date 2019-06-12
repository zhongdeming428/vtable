## m-vtable

[DEMO](https://zhongdeming428.github.io/vtable/demo/dist/index.html)

This is a simple Vue component for rendering tables.API design style refers to the [rc-table](https://github.com/react-component/table) of ant-design.

### Install

```
npm install m-vtable -S
```
or
```
yarn add m-vtable
```
or add the following script tag to your HTML
```
<script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script src="https://unpkg.com/m-vtable@1.0.0/dist/main.js"></script>
```

### Use

If you are going to use m-vtable with SFC,just import it and register it as a component,then write it into your template.

If you are writing Vue in `.html`,just register the m-vtable as below:

```js
new Vue({
  el: 'xxx',
  template: 'xxx',
  components: {
    vTable: vTable.default
  },
  data: {
    data: [],
    columns: []
  }
})
```
note that it's vTable.default,not vTable or others.

See [index.html](./demo/html/index.html)

### Document

* `data`: {Object} The data Object you want to render as tables with any keys.
* `columns`: {Object} The Object tells `m-vtable` how to render data to tables.It contains these properties:
  * `title` {String} The text of column headers to display.
  * `render` {Function} The function to render other Vue component in table cells according to the current data.It accepts `createElement` function and current item of data as params.**Note that if `dataIndex` exists in current column,`render` wouldn't be invoked**.The render function gives you the power to render any components in tables with the data,don't forget to return a vNode after you call `createElement`.
  * `align` {String} The string to set the text align style of current table column.It will be applys as the `text-align` style of `td` element,so you already know the appropriate values of it.
  * `dataIndex` {String} The string to tell `m-vtable` how to get the value of current column in data object.it must be a key in data item.
  * `width` {String} The string to set the width of `td`,will be applied as `width` style of `td` element.
* `onHeaderClick`: {Function} The handler of columns header click event,accepts the current item of `columns` as param.
* `onRowClick`: {Function} The handler of row click event,accepts current item of `data` as param.
* `className`: {String} The class name you want to apply to the rendered table.You can custom the style of rendered tables with this class name.