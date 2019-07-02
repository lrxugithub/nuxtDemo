<template>
  <div>
    <el-button type="danger">weixian</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="company" label="公司"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted: function(){
    this.asyncData()
    this.getTableData()
  },
  methods: {
    getTableData () {
      for(let i = 0; i <= 5; i++){
        this.tableData.push({name:'张'+i, sex: i%2 == 0 ? '女': '男', company: '红星'+ i + '部'})
      }
    },
    async asyncData(context, callback) {
      let {data} = await axios.get('https://api.myjson.com/bins/1ctwlm')
    }
  }
}
</script>