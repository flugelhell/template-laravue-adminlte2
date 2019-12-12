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
import { handlePage } from "../mixins/handlePage.js"; // import mixin
// Vue
export default {
  mixins: [handlePage], // register mixin
  methods: {},
  mounted() {
    this.maxheight();
    // $(".sidebar-menu > li.treeview.active").removeClass("active");
    // .parent()
    // .closest("li")
    // .removeClass("menu-open");
  }
};
</script>