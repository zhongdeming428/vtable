<template>
  <div>
    <v-table className="v-table-plus" :data="data" :columns="columns" :onHeaderClick="headerClickHandler" :onRowClick="rowClickHandler"/>
  </div>
</template>

<script>
import vTable from "src";

const data = [
  { name: "Russ", age: 23, checked: false },
  { name: "Joel", age: 24, checked: true },
  { name: "Coel", age: 25, checked: false }
];

const columns = [
  {
    title: "",
    render(h, d) {
      return h("input", {
        attrs: {
          type: "checkbox",
          checked: d.checked
        }
      });
		},
		align: 'center'
  },
  { title: "Name", dataIndex: "name", align: "center", width: "40%" },
  { title: "Age", dataIndex: "age", align: "center", width: "40%" }
];

export default {
  components: { vTable },
  data() {
    return {
      data,
      columns
    };
	},
	methods: {
		rowClickHandler(data) {
			data.checked = !data.checked
		},
		headerClickHandler(col) {
			alert(col.title)
		}
	}
};
</script>

<style>
.v-table-plus td {
	border-bottom: 1px solid #e3e3e3;
}
.v-table-plus td:not(:last-child) {
	border-right: 1px solid #e3e3e3;
}
</style>
