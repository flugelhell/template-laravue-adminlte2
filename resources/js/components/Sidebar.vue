<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/templates/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image" />
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#">
            <i class="far fa-circle text-success"></i> Online
          </a>
        </div>
      </div>
      <!-- search form -->
      <!-- <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search...">
        <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fas fa-search"></i>
            </button>
        </span>
        </div>
      </form>-->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="header">MAIN NAVIGATION</li>
        <router-link tag="li" active-class="active" to="/" exact>
          <a>
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </router-link>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-box"></i>
            <span>Inventory</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <router-link tag="li" active-class="active" :to="{name:'master_hw'}" exact>
              <a>
                <i class="far fa-circle"></i>Hardware
              </a>
            </router-link>
            <li>
              <a href="/">
                <i class="far fa-circle"></i>Hardware
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-circle"></i>Software
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="far fa-circle"></i>Network
                <span class="pull-right-container">
                  <i class="fas fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <router-link tag="li" active-class="active" to="/tes" exact>
                  <a>
                    <i class="far fa-circle"></i> tes2
                  </a>
                </router-link>
                <li>
                  <a href="#">
                    <i class="far fa-circle"></i> Level Two
                  </a>
                </li>
                <li class="treeview">
                  <a href="#">
                    <i class="far fa-circle"></i> Level Two
                    <span class="pull-right-container">
                      <i class="fas fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li>
                      <a href="/">
                        <i class="far fa-circle"></i> tes3
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                        <span class="pull-right-container">
                          <i class="fas fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu">
                        <li>
                          <a href="/">
                            <i class="far fa-circle"></i> tes4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="far fa-circle"></i> Level One
              </a>
            </li>
          </ul>
        </li>
        <router-link tag="li" active-class="active" to="/about" exact>
          <a>
            <i class="fas fa-tachometer-alt"></i>
            <span>About</span>
          </a>
        </router-link>
        <li>
          <a href="/">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href>
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard1</span>
          </a>
        </li>
        <li>
          <a class href="/">
            <i class="fas fa-tachometer-alt"></i>
            <span>About</span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-copy"></i>
            <span>Layout Options</span>
            <span class="pull-right-container">
              <span class="label label-primary pull-right">4</span>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="/">
                <i class="far fa-circle"></i> Tes
              </a>
            </li>
            <li>
              <a href="pages/layout/top-nav.html">
                <i class="far fa-circle"></i> Top Navigation
              </a>
            </li>
            <li>
              <a href="pages/layout/boxed.html">
                <i class="far fa-circle"></i> Boxed
              </a>
            </li>
            <li>
              <a href="pages/layout/fixed.html">
                <i class="far fa-circle"></i> Fixed
              </a>
            </li>
            <li>
              <a href="pages/layout/collapsed-sidebar.html">
                <i class="far fa-circle"></i> Collapsed Sidebar
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="pages/widgets.html">
            <i class="fas fa-th"></i>
            <span>Widgets</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-green">new</small>
            </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-pie-chart"></i>
            <span>Charts</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/charts/chartjs.html">
                <i class="far fa-circle"></i> ChartJS
              </a>
            </li>
            <li>
              <a href="pages/charts/morris.html">
                <i class="far fa-circle"></i> Morris
              </a>
            </li>
            <li>
              <a href="pages/charts/flot.html">
                <i class="far fa-circle"></i> Flot
              </a>
            </li>
            <li>
              <a href="pages/charts/inline.html">
                <i class="far fa-circle"></i> Inline charts
              </a>
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-laptop"></i>
            <span>UI Elements</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/UI/general.html">
                <i class="far fa-circle"></i> General
              </a>
            </li>
            <li>
              <a href="pages/UI/icons.html">
                <i class="far fa-circle"></i> Icons
              </a>
            </li>
            <li>
              <a href="pages/UI/buttons.html">
                <i class="far fa-circle"></i> Buttons
              </a>
            </li>
            <li>
              <a href="pages/UI/sliders.html">
                <i class="far fa-circle"></i> Sliders
              </a>
            </li>
            <li>
              <a href="pages/UI/timeline.html">
                <i class="far fa-circle"></i> Timeline
              </a>
            </li>
            <li>
              <a href="pages/UI/modals.html">
                <i class="far fa-circle"></i> Modals
              </a>
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-edit"></i>
            <span>Forms</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/forms/general.html">
                <i class="far fa-circle"></i> General Elements
              </a>
            </li>
            <li>
              <a href="pages/forms/advanced.html">
                <i class="far fa-circle"></i> Advanced Elements
              </a>
            </li>
            <li>
              <a href="pages/forms/editors.html">
                <i class="far fa-circle"></i> Editors
              </a>
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-table"></i>
            <span>Tables</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/tables/simple.html">
                <i class="far fa-circle"></i> Simple tables
              </a>
            </li>
            <li>
              <a href="pages/tables/data.html">
                <i class="far fa-circle"></i> Data tables
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="pages/calendar.html">
            <i class="fas fa-calendar"></i>
            <span>Calendar</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-red">3</small>
              <small class="label pull-right bg-blue">17</small>
            </span>
          </a>
        </li>
        <li>
          <a href="pages/mailbox/mailbox.html">
            <i class="fas fa-envelope"></i>
            <span>Mailbox</span>
            <span class="pull-right-container">
              <small class="label pull-right bg-yellow">12</small>
              <small class="label pull-right bg-green">16</small>
              <small class="label pull-right bg-red">5</small>
            </span>
          </a>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-folder"></i>
            <span>Examples</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="pages/examples/invoice.html">
                <i class="far fa-circle"></i> Invoice
              </a>
            </li>
            <li>
              <a href="pages/examples/profile.html">
                <i class="far fa-circle"></i> Profile
              </a>
            </li>
            <li>
              <a href="pages/examples/login.html">
                <i class="far fa-circle"></i> Login
              </a>
            </li>
            <li>
              <a href="pages/examples/register.html">
                <i class="far fa-circle"></i> Register
              </a>
            </li>
            <li>
              <a href="pages/examples/lockscreen.html">
                <i class="far fa-circle"></i> Lockscreen
              </a>
            </li>
            <li>
              <a href="pages/examples/404.html">
                <i class="far fa-circle"></i> 404 Error
              </a>
            </li>
            <li>
              <a href="pages/examples/500.html">
                <i class="far fa-circle"></i> 500 Error
              </a>
            </li>
            <li>
              <a href="pages/examples/blank.html">
                <i class="far fa-circle"></i> Blank Page
              </a>
            </li>
            <li>
              <a href="pages/examples/pace.html">
                <i class="far fa-circle"></i> Pace Page
              </a>
            </li>
          </ul>
        </li>
        <li class="treeview">
          <a href="#">
            <i class="fas fa-share"></i>
            <span>Multilevel</span>
            <span class="pull-right-container">
              <i class="fas fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li>
              <a href="/">
                <i class="far fa-circle"></i> tes1
              </a>
            </li>
            <li>
              <a href="#">
                <i class="far fa-circle"></i> Level One
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="far fa-circle"></i> Level One
                <span class="pull-right-container">
                  <i class="fas fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li>
                  <a href="/">
                    <i class="far fa-circle"></i> tes2
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="far fa-circle"></i> Level Two
                  </a>
                </li>
                <li class="treeview">
                  <a href="#">
                    <i class="far fa-circle"></i> Level Two
                    <span class="pull-right-container">
                      <i class="fas fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li>
                      <a href="/">
                        <i class="far fa-circle"></i> tes3
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                      </a>
                    </li>
                    <li class="treeview">
                      <a href="#">
                        <i class="far fa-circle"></i> Level Three
                        <span class="pull-right-container">
                          <i class="fas fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu">
                        <li>
                          <a href="/">
                            <i class="far fa-circle"></i> tes4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="far fa-circle"></i> Level One
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://adminlte.io/docs">
            <i class="fas fa-book"></i>
            <span>Documentation</span>
          </a>
        </li>
        <li class="header">LABELS</li>
        <li>
          <a href="#">
            <i class="far fa-circle text-red"></i>
            <span>Important</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="far fa-circle text-yellow"></i>
            <span>Warning</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="far fa-circle text-aqua"></i>
            <span>Information</span>
          </a>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
  computed: {
    subIsActive() {
      //tes
    }
  }
};
</script>