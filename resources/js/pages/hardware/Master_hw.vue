<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Master Hardware</h1>
      <ol class="breadcrumb">
        <li>
          <a href="#">
            <i class="fa fa-dashboard"></i> Home
          </a>
        </li>
        <li>
          <a href="#">Inventory</a>
        </li>
        <li class="active">Master Hardware</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12" style="padding: 15px">
          <button class="btn btn-primary">
            <i class="fa fa-search"></i> Find
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-plus"></i> Insert
          </button>
          <button class="btn btn-primary">
            <i class="fa fa-edit"></i> Edit
          </button>
        </div>
      </div>
      <form action>
        <div class="row">
          <!-- Hardware -->
          <div class="col-md-6">
            <div class="box box-success">
              <div class="box-header with-border">
                <h3 class="box-title">Hardware</h3>

                <div class="box-tools pull-right">
                  <button
                    type="button"
                    class="btn btn-box-tool"
                    data-toggle="collapse"
                    data-target="#hwbox"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                  <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button> -->
                </div>
              </div>
              <!-- /.box-header -->
              <div class="form-horizontal" id="hwbox">
                <div class="box-body">
                  <div class="form-group">
                    <label for="hwcode" class="col-sm-3 control-label">Code</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwcode"
                        placeholder="HW00001"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwname" class="col-sm-3 control-label">Name</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwname"
                        placeholder="Laptop Dell G7"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwuser" class="col-sm-3 control-label">User</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwuser"
                        placeholder="John Doe"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwsite" class="col-sm-3 control-label">Site</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control select2"
                        style="width: 100%;"
                        id="hwsite"
                        disabled
                      >
                        <option selected disabled>-</option>
                        <option>Kantor Pusat</option>
                        <option>DKI Jakarta</option>
                        <option>Jawa Tengah</option>
                        <option>Jawa Timur</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwdivision" class="col-sm-3 control-label">Division</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control select2"
                        style="width: 100%;"
                        id="hwdivision"
                        disabled
                      >
                        <option selected disabled>-</option>
                        <option>Akuntansi & Keuangan</option>
                        <option>Legal & Manajemen Resiko</option>
                        <option>Pengembangan Usaha Non Core</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwcategory" class="col-sm-3 control-label">Category</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control select2"
                        style="width: 100%;"
                        id="hwcategory"
                        disabled
                      >
                        <option selected disabled>-</option>
                        <option>PC</option>
                        <option>Laptop</option>
                        <option>Printer</option>
                        <option>Scanner</option>
                        <option>Server</option>
                        <option>Storage</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwbrand" class="col-sm-3 control-label">Brand</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwbrand"
                        placeholder="Dell"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwmodel" class="col-sm-3 control-label">Model / Type</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwmodel"
                        placeholder="G7 7588"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwsn" class="col-sm-3 control-label">S/N</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwsn"
                        placeholder="BBV1YR2"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwacqusitionyear" class="col-sm-3 control-label">Acqusition Year</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwacqusitionyear"
                        placeholder="2019"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwpurchaseprice" class="col-sm-3 control-label">Purchase Price (Rp.)</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwpurchaseprice"
                        placeholder="5.000.000"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hwdocno" class="col-sm-3 control-label">Document No</label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="hwdocno"
                        placeholder="25/Peng/V/2019"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <!-- /.box-body -->
              </div>
              <!-- <div class="box-footer">
              </div>-->
            </div>
            <!-- /.box -->
          </div>
          <!-- /.col-md-6 -->

          <!-- Software -->
          <div class="col-md-6">
            <div class="box box-success">
              <div class="box-header with-border">
                <h3 class="box-title">Software Installed</h3>

                <div class="box-tools pull-right">
                  <button
                    type="button"
                    class="btn btn-box-tool"
                    data-toggle="collapse"
                    data-target="#swbox"
                  >
                    <i class="fa fa-minus"></i>
                  </button>
                  <!-- <button type="button" class="btn btn-box-tool" data-widget="remove"><i
                  class="fa fa-remove"></i></button>-->
                </div>
              </div>
              <!-- /.box-header -->
              <div class="form-horizontal" id="swbox">
                <div class="box-body">
                  <div class="form-group">
                    <label for="swinstalled" class="col-sm-3 control-label">Installed</label>
                    <div class="col-sm-9">
                      <select
                        class="form-control select2"
                        multiple="multiple"
                        data-placeholder="Select a Software"
                        style="width: 100%;"
                        id="swinstalled"
                        disabled
                      >
                        <option>SW0001 MS Office 2007 (KGFVY-7733B-8WCK9-KTG64-BC7D8)</option>
                        <option>SW0001 MS Office 2013 (KGFVY-7733B-8WCK9-KTG64-BC7D8)</option>
                      </select>
                    </div>
                  </div>
                  <!-- /.box-body -->
                </div>
                <!-- <div class="box-footer">
                </div>-->
              </div>
              <!-- /.box -->
            </div>
          </div>
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-md-12">
            <div class="box-footer">
              <input type="submit" class="btn btn-primary" value="Save" disabled />
            </div>
          </div>
        </div>
      </form>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { handlePage } from "../../mixins/handlePage.js"; // import mixin
export default {
  mixins: [handlePage], // register mixin
  mounted() {
    this.maxheight();
  }
};
</script>


<style>
</style>