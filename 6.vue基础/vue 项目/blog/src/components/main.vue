<template>
    <div class="capture">
        <a-modal
        title="Title"
        :visible="true"
        
        >
            <a-table :columns="columns" :data-source="data" bordered>
                <template
                v-for="col in ['name', 'age', 'address']"
                :slot="col"
                slot-scope="text, record"
                >
                <div :key="col">
                    <a-input
                    v-if="record.editable"
                    style="margin: -5px 0"
                    :value="text"
                    @change="e => handleChange(e.target.value, record.key, col)"
                    />
                    <template v-else>
                    {{ text }}
                    </template>
                </div>
                </template>
                <template slot="operation" slot-scope="text, record">
                <div class="editable-row-operations">
                    <span v-if="record.editable">
                    <a @click="() => save(record.key)">Save</a>
                    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
                        <a>Cancel</a>
                    </a-popconfirm>
                    </span>
                    <span v-else>
                    <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
                    </span>
                </div>
                </template>
            </a-table>
            <a-button @click="printReport">导出报告</a-button>
        </a-modal>
    </div>
</template>

<script>
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    scopedSlots: { customRender: 'age' },
  },
  {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    scopedSlots: { customRender: 'address' },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
import html2canvas from 'html2canvas';
export default {
    data() {
        this.cacheData = data.map(item => ({ ...item }));
        return {
        data,
        columns,
        editingKey: '',
        };
    },
    methods: {
        printReport() {
            window.pageYoffset = 0;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            html2canvas(document.getElementsByClassName('ant-modal-wrap')[0], {
                allowTaint: true,
                logging: false,
                useCORS: true,
                scale: window.devicePixelRatio,//提高清晰度
                height: document.getElementsByClassName('ant-modal-wrap')[0].scrollHeight,
                windowHeight: document.getElementsByClassName('ant-modal-wrap')[0].scrollHeight,
                x:0,
                y:window.pageYOffset,
            })
          .then((canvas) => {
            // 生成图片导出
            const a = document.createElement('a');
            a.href = canvas.toDataURL('image/png');
            a.download = this.title;
            a.click();
          })
        },
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.filter(item => key === item.key)[0];
      const targetCache = newCacheData.filter(item => key === item.key)[0];
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = '';
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
        delete target.editable;
        this.data = newData;
      }
    },
  },
}
</script>

<style>
    .ant-pagination-item a {
        color: #000 !important;
    }
</style>