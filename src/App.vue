<template>
  <header className="Header Column">
    <div className="Menu">
      <ul>
        <li className="Menu-Item">
          <router-link to="/">Home</router-link>
        </li>

        <li className="Menu-Item">
          <router-link to="/tanks">Tanks</router-link>
        </li>
        <li className="Menu-Item">
          <router-link to="/clients">Clients</router-link>
        </li>
        <li className="Menu-Item">
          <router-link to="/orders">Orders</router-link>
        </li>
        <!--


        <li className="Menu-Item">
          <router-link to="/supplies">Supplies</router-link>
        </li>
        <li className="Menu-Item">
          <router-link to="/materials">Materials</router-link>
        </li>
        <li className="Menu-Item">
          <router-link to="/store">Store</router-link>
        </li> -->
      </ul>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>
