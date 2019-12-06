<template>
  <!-- wrapper -->
  <div class="wrapper">
    <!-- Header -->
    <app-header v-if="isAuth" />
    <!-- Left side column. contains the logo and sidebar -->
    <app-sidebar v-if="isAuth" />
    <!-- Content Wrapper. Contains page content -->
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <!-- Footer -->
    <app-footer v-if="isAuth" />

    <!-- Control Sidebar -->
    <app-control-sidebar v-if="isAuth" />
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
    immediately after the control sidebar-->
    <div class="control-sidebar-bg" v-if="isAuth"></div>
  </div>
  <!-- ./wrapper -->
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import ControlSidebar from "./components/ControlSidebar.vue";
export default {
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isAuth"])
  },
  components: {
    "app-header": Header,
    "app-sidebar": Sidebar,
    "app-footer": Footer,
    "app-control-sidebar": ControlSidebar
  }
};
</script>