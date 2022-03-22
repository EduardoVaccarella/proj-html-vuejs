<template>
  <div class="container-fluid">
    <div class="container">
      <div class="logo">
        <img src="../assets/img/MasterStudy-1.svg" alt="">
      </div>

      <div class="nav-bar">
        <div class="nav-item" v-for="(navItem,i) in navItems" :key="i">
          <div class="new-bedge" v-if="i == 2">
             new
          </div>
            {{ navItem }}
        </div>

        <div class="nav-icon-wrapper">
          <div class="nav-icon" v-for="(navIcon,i) in navIcons" :key="i">
            <font-awesome-icon :icon="'fa-brands ' + navIcon"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderProj',
  data() {
    return {
      navItems: [
        'Courses',
        'Course Format',
        'Add-Course',
        'Pages',
        'Demos'
      ],
      navIcons: [
        'fa-linkedin',
        'fa-instagram',
        'fa-facebook',
        'fa-twitter'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container, .nav-bar, .nav-icon-wrapper {
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-bar {
  font-weight: 600;
  color: $mineShaft;
}

.nav-item {
  padding: 10px;
}

.nav-item:hover {
  border-bottom: 2px solid $buttercup;
  border-top: 2px solid transparent;
  cursor: pointer;
}

.nav-icon-wrapper {
  margin-left: 25px;
}

.nav-icon {
  padding: 5px;
}

.nav-icon:hover {
  cursor: pointer;
}

.new-bedge {
  position: absolute;
  top: 29px;
  right: 665px;
  color: white;
  background-color: rgb(235, 0, 90);
  padding: 0px 4px;
  border-radius: 3px;
  border-bottom-left-radius: 0px;
  font-size: 9px;
  text-transform: uppercase;
}
</style>
