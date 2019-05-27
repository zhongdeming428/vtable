<style scoped>
table {
  width: 100%;
  background: #fff;
}
table > thead td {
  border-bottom: 1px solid #e3e3e3;
}
table td {
  padding: 5px;
}
</style>

<script>
const getTdStyle = col => ({
  textAlign: col.align,
  width: col.width,
  verticalAlign: col.vAlign
})

export default {
  name: 'vTable',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    onRowClick: Function,
    onHeaderClick: Function,
    className: String
  },
  render(h) {
    let that = this
    return h(
      'table',
      {
        class: that.className,
        attrs: {
          cellspacing: '0',
          cellpadding: '0'
        }
      },
      [
        that.getTableHeader(h),
        that.getTableRows(h)
      ]
    )
  },
  methods: {
    getTableHeader(h) {
      let that = this
      return h(
        'thead',
        this.columns.map(
          col => h(
            'td',
            {
              on: {
                click() {
                  that.onHeaderClick && that.onHeaderClick(col)
                }
              },
              style: getTdStyle(col)
            },
            col.title
          )
        )
      )
    },
    getTableRows(h) {
      let that = this
      return h(
        'tbody',
        this.data.map(
          d => h(
            'tr',
            {
              on: {
                click() {
                  that.onRowClick && that.onRowClick(d)
                }
              }
            },
            this.columns.map(
              col => h(
                'td',
                { style: getTdStyle(col) },
                d[col.dataIndex] || [col.render && col.render(h, d)]
              )
            )
          )
        )
      )
    }
  }
}
</script>