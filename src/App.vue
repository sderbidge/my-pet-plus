<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/PetsLogo.png" />
        </router-link>
      </div>
      <div id="side">
        <router-link to="/myPet">
          <div class="menu-item my-pet">
            <img src="/images/myPet.png" />
          </div>
        </router-link>
        <router-link to="/play">
          <div class="menu-item">
            <img src="/images/Play.png" />
          </div>
        </router-link>
      </div>
    </div>
    <router-view />
    <footer>
      <a href="https://github.com/sderbidge/creative3">Github Repository</a>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a,
#menu a:visited {
  color: #b84901;
  font-family: Arial, Helvetica, sans-serif;
}

#menu a:hover {
  color: #f08e4d;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 100px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.my-pet {
  margin-right: 50px;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: #303030;
  color: white;
  text-align: center;
}

footer a,
footer a:visited {
  color: #fff;
  text-decoration: none;
}
</style>
