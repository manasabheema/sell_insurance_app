<template>
  <basic-stretched-layout>
    <template v-slot:header>
      <div class="logo-header">
        <img
          src="../assets/back-arrow.png"
          alt="GoBack"
          class="back-arrow global-back-arrow"
          @click="false && $router.go(-1)"
        />
        <img
          src="https://insurance-blog-cms.paytminsurance.co.in/logo_e79d0e811a.svg"
          alt=""
          class="paytm-logo"
        /></div
    ></template>
    <template v-slot:sub-header>
      <img
        src="../assets/sell-insurance-bg.png"
        alt="Sell Insurance and Earn Commission"
        class="theme-image-background"
      />
    </template>

    <template v-slot:page-content>
      <h2 class="registration-header">
        Sell Insurance
        <span class="dark-blue">and earn commission</span>
      </h2>
      <p>Timely settlement, flexible working hours, competitive commissions.</p>
      <div class="policy-info">
        <card-component
          v-for="(
            { imageURL = '', count = '', description = '' }, idx
          ) in policyInformation"
          :key="idx"
          class="mini-card"
        >
          <template v-slot:header>
            <img
              v-bind:src="imageURL"
              alt=""
              class="theme-image-background data-image"
            />
            <h4>{{ count }}</h4></template
          >
          <template v-slot:card-content
            ><p class="global-small-p-text">
              {{ description }}
            </p></template
          >
        </card-component>
      </div>
      <div class="all-cards">
        <card-component
          v-for="(
            {
              imageURL = '',
              header = '',
              content = '',
              points = [],
              videoSessions = [],
            },
            idx
          ) in registrationQAs"
          :key="idx"
          class="info-card"
        >
          <template v-slot:header>
            <img
              v-bind:src="imageURL"
              alt=""
              class="theme-image-background thinking-image"
            />
            <h3>{{ header }}</h3></template
          >
          <template v-slot:card-content
            ><p>
              {{ content }}
            </p></template
          >
          <template v-slot:card-points>
            <div
              v-for="(
                { icon = '', pointHeader = '', pointDescription = '' }, index
              ) in points"
              :key="index"
              class="row-vide-points"
            >
              <img :src="icon" class="point-icon" />
              <div class="point-content">
                <h6 class="point-header">{{ pointHeader }}</h6>
                <p class="global-small-p-text">{{ pointDescription }}</p>
                <hr />
              </div>
            </div>
          </template>
          <template v-slot:horizontal-slide-items>
            <div
              v-for="({ title = '' }, index) in videoSessions"
              :key="index"
              class="video-card"
            >
              <video controls class="video-container">
                <source
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
                  type="video/mp4"
                />
              </video>
              <h4>{{ title }}</h4>
            </div>
          </template>
        </card-component>
      </div>
    </template>
    <template v-slot:footer>
      <router-link
        :to="{ name: 'pan-verification' }"
        class="global-fullwidth-button"
      >
        <button class="global-fullwidth-button">Register</button></router-link
      >
    </template>
  </basic-stretched-layout>
</template>
<script>
import BasicStretchedLayout from "@/layouts/BasicStretchedLayout.vue";
import CardComponent from "@/common/components/CardComponent.vue";
import { policyInformation, registrationQAs } from "@/static";

export default {
  name: "agentRegistrationHome",
  components: {
    BasicStretchedLayout,
    CardComponent,
  },

  setup() {
    return {
      policyInformation,
      registrationQAs,
    };
  },
};
</script>
<style scoped>
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 0.5em 0;
  padding: 0;
}
.logo-header {
  position: relative;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.back-arrow {
  position: absolute;
  left: 0.4rem;
  top: 50%;
  transform: translateY(-50%);
}

.paytm-logo {
  width: 6em;
}

@media only screen and (min-width: 480px) {
  .paytm-logo {
    width: 18%;
  }
}

.theme-image-background {
  display: block;
  width: 100%;
  border-radius: 1px;
}

.registration-header {
  color: rgb(0, 185, 241);
}
.registration-header span {
  display: block;
  color: rgb(14, 44, 92);
}

.policy-info {
  margin: 1.5em auto;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
}

.mini-card {
  padding: 0;
  text-align: center;
  max-width: 100px;
  width: 20vw;
}

.info-card {
  border-radius: 17px;
  margin-bottom: 2em;
}
.thinking-image {
  width: 2.5em;
}

.info-card:first-of-type {
  background-color: rgba(226, 243, 238, 1);
}
.info-card:nth-of-type(2) {
  background-color: rgba(248, 242, 216, 0.7);
}
.info-card:nth-of-type(2) .row-vide-points .point-icon {
  width: 0.7em;
  height: 0.7em;
}
.info-card:nth-of-type(2) .row-vide-points .point-content hr {
  border: 0;
}

.info-card:nth-of-type(3) {
  background-color: white;
}
.info-card:nth-of-type(3) .row-vide-points .point-icon {
  width: 2em;
  height: 2em;
}

.info-card:nth-of-type(3) .row-vide-points .global-small-p-text {
  color: gray;
}

.info-card:nth-of-type(4) {
  background-color: rgb(221, 242, 249);
}

.row-vide-points {
  display: flex;
  flex: 1;
  width: 100%;
}

.point-icon {
  display: block;
  padding: 0.4em 1em;
}

.point-content {
  display: flex;
  flex-direction: column;
}

.video-card {
  max-width: 400px;
  width: 70%;
  padding: 0.5em;
  border: 0;
  border-radius: 10px;
  background: white;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 1em;
}

.video-container {
  width: 100%;
  max-height: 150px;
}
@media only screen and (min-width: 480px) {
  .video-container {
    max-height: 250px;
  }
}
</style>
