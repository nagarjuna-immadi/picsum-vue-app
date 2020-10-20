<template>
  <div>
    <header class="fixed-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <h3 class="logo">
                  <router-link to="/"><i class="far fa-images"></i> Lorem Picsum</router-link>
                </h3>
              </div>
              <div class="col-lg-6 top-nav">
                <nav>
                  <ul class="nav nav-pills float-right">
                    <li class="nav-item">
                      <router-link class="nav-link" to="/">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" to="/gallery">Gallery</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main class="container">
      <router-view />
    </main>
    <footer class="fixed-bottom">
      <div class="container">
        <p class="text-center">
          Developed with <span class="tomato">&hearts;</span> on <a
            href="https://vuejs.org/"
            target="_blank">Vue.js</a> |
          <a
            href="https://github.com/nagarjuna-immadi/picsum-vue-app"
            target="_blank"
            >Github Repo</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
header {
  background: #fff;
}

header .container {
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #e5e5e5;
}

header h3 a,
header h3 a:hover {
  color: #e47676;
  text-decoration: none;
}

main.container {
  padding-top: 100px;
  padding-bottom: 20px;
}

footer {
  background: #fff;
}

footer .container {
  padding-top: 15px;
  border-top: 1px solid #e5e5e5;
}

.align-right {
  text-align: right;
}

.align-right .btn {
  margin-left: 10px;
}

.top-nav .nav-item {
  margin-left: 10px;
}

.router-link-exact-active, .logo {
  font-weight: bold;
}
</style>
