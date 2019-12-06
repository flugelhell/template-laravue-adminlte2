<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Control panel</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <a href="/">
            <i class="fa fa-dashboard"></i> Home
          </a>
        </li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Main row -->
      <div class="row">
        <section class="col-lg-12">about</section>
      </div>
      <!-- /.row (main row) -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
<script>
// Vue
export default {
  methods: {
    autoheight: () => {
      let sb = document.getElementsByClassName("sidebar");
      let cw = document.getElementsByClassName("content-wrapper");
      // console.log(cw[0]);
      cw[0].setAttribute("style", "min-height:" + sb[0].clientHeight + "px;");
    }
  },
  mounted() {
    this.autoheight();
  }
};
</script>