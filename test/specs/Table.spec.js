import { expect } from 'chai'
import table from 'src/index'
import { mount } from '@vue/test-utils'

let props1 = {
  data: [
    { name: 'coel', age: 23 },
    { name: 'joel', age: 18 }
  ],
  columns: [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' }
  ]
}

let props2 = {
  data: [
    { name: 'coel', age: 23, checked: false },
    { name: 'joel', age: 18, checked: true }
  ],
  columns: [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    { 
      title: 'Select', 
      render(h, d) {
        return h(
          'input',
          {
            attrs: {
              type: 'checkbox',
              value: d.checked
            }
          }
        )
      } 
    }
  ]
}

describe('Table', () => {
  it('get correct props', () => {
    let wrapper = mount(table, {
      propsData: {
        className: 'v-table-plus'
      }
    })
    expect(wrapper.vm.$props.className).to.equal('v-table-plus')
    expect(wrapper.classes()).contains('v-table-plus')
  })
  it('has correct cellspacing and cellpaddng property', () => {
    let wrapper = mount(table)
    expect(wrapper.attributes('cellspacing') == 0).to.be.true
    expect(wrapper.attributes().cellpadding == 0).to.be.true
  })
  it('rendering data correctly', () => {
    let wrapper = mount(
      table,
      {
        propsData: props1
      }
    )
    expect(wrapper.vm.$props.data).length(2)
    expect(wrapper.vm.$props.columns).length(2)
    expect(wrapper.findAll('thead > td')).length(2)
    expect(wrapper.findAll('tbody > tr')).length(2)
    expect(wrapper.element.children[0].children[0].textContent).equal('Name')
    expect(wrapper.element.children[0].children[1].textContent).equal('Age')
  })
  it('trigger event while clicking row', () => {
    let flag = false
    let wrapper = mount(
      table,
      {
        propsData: {
          ...props1,
          onRowClick() {
            flag = true
          }
        }
      }
    )
    expect(flag).to.be.false
    wrapper.find('tbody > tr').trigger('click')
    expect(flag).to.be.true
  })
  it('render property', () => {
    let wrapper = mount(
      table,
      {
        propsData: props2
      }
    )
    expect(wrapper.contains('input[type=checkbox]')).to.be.true
    expect(wrapper.findAll('input[type=checkbox]')).length(2)
  })
  it('on header click func', done => {
    let wrapper = mount(
      table,
      {
        propsData: {
          ...props1,
          onHeaderClick(col) {
            expect(col.title).to.equal('Age')
            done()
          }
        }
      }
    )
    wrapper.find('thead > td:nth-child(2)').trigger('click')
  })
})