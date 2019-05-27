<style scoped>
table {
  width: 100%;
  background: #fff;
}
table > thead {
  border-bottom: 1px solid #c3c3c3;
}
table td {
  padding: 5px;
}
</style>

<script>
const getAttrs = col => ({
  width: col.width,
  colspan: col.colSpan
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
              attrs: getAttrs(col),
              style: {
                textAlign: col.align
              },
              on: {
                click() {
                  that.onHeaderClick && that.onHeaderClick(col)
                }
              }
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
                  that.onRowClick && that.onRowClick()
                }
              }
            },
            this.columns.map(
              col => h(
                'td',
                getAttrs(col),
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