
<template>
    <div>
        <h3> {{isEdit? '编辑' : '新建'}}课程</h3>
        <ele-form
            v-bind="formConfig"
            v-model="formData"
            :request-fn="handleRequest"
            @request-success="handleRequestSuccess"
        />
    </div>
 
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      courseName: '1',
      cover: '2',
      formData: {},
      formConfig: {
        order: [
          "courseName",
          "cover"
        ],
        formDesc: {
          courseName: {
            type: "input",
            label: "课程名称",
            layout: 18,
            required: true,
            rules: [
              {
                min: 3,
                max: 5,
                type: "string",
                trigger: "blur",
                message: "课程名称在3-5个之间"
              }
            ]
          },
          cover: {
            type: "input",
            label: "课程封面图",
            layout: 18,
            required: true,
            rules: [
              {
                type: "string",
                trigger: "blur"
              }
            ]
          }
        }
      }
    };
  },
  methods: {
    async handleRequest(data) {
      const url = this.isEdit? `course/${this.id}` : `course`
      const method = this.isEdit? 'put' : 'post'
      await this.$http[method]( url, data )
      return Promise.resolve();
    },
    handleRequestSuccess() {
      this.$message.success("发送成功");
      this.$router.go(-1)
    },
    async queryCoursesRowData() {
        const res = await this.$http.get(`course/${this.id}`)
        this.formData = res.data
    }
  },
  computed: {
      isEdit() {
          return !!this.id
      }
  },
  created() {
     this.isEdit && this.queryCoursesRowData()
  }
};
</script>
