<template>
  <div>
    <div style="margin: 200px 0 0 100px">
      <el-popover
        placement="top-start"
        title="Title"
        :width="200"
        trigger="hover"
      >
        <template #reference>
          <el-button>Hover to activate</el-button>
        </template>
        <div>
          <p>this is content, this is content, this is content</p>
          <el-popover
            placement="top-start"
            title="Title"
            :width="200"
            trigger="hover"
          >
            <template #reference>
              <el-button>Hover to activate</el-button>
            </template>
            <div>
              第二层
              <el-popover
                placement="top-start"
                title="Title"
                :width="200"
                trigger="hover"
              >
                <template #reference>
                  <el-button>Hover to activate</el-button>
                </template>
                <div>第三层</div>
              </el-popover>
            </div>
          </el-popover>
        </div>
      </el-popover>
    </div>
    <div style="margin: 20px 0 0 100px; height: 1200px">
      <a-popover title="Title">
        <template #content>
          <p>第二层</p>
          <a-popover title="Title">
            <template #content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <a-button type="primary">Hover me2</a-button>
          </a-popover>
        </template>
        <a-button type="primary">Hover me1</a-button>
      </a-popover>
    </div>
  </div>
</template>
<script>
export default {};
</script>
