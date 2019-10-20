<template>
  <div class="main-body-info">
    <h2>Our Offices</h2>
    <ul class="main-body-info__addresses">
      <li
        v-for="(address, index) in addresses"
        :key="index"
        @click="addressItemClickHandler(address)"
        :class="{'main-body-info__addresses-active': address === activeAddress}"
      >
        {{address.name}}
      </li>
    </ul>
    <div class="main-body-info__address-details">
      <h3>Global Message Services Ukraine LLC</h3>
      <ul v-if="activeAddress" class="main-body-info__address-details-item">
        <li
          v-for="(item, index) in activeAddress.addressDetails"
          :key="index"
        >
          {{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex'

  export default {
    name: "MainBodyInfo",
    data() {
      return {
        addresses: [
          {
            name: 'KYIV',
            addressDetails: {
              address: 'Kyiv, Stepan Bandera, 33',
              code: '02066',
              country: 'Ukraine'
            },
            latlng: {
              lat: 50.450001,
              lng: 30.523333
            }
          },
          {
            name: 'NEW YORK',
            addressDetails: {
              address: 'New York, some address',
              code: '43534',
              country: 'USA'
            },
            latlng: {
              lat: 43,
              lng: -75
            }
          },
          {
            name: 'GUANGZHOU',
            addressDetails: {
              address: 'Guangzhou, some address',
              code: '56652',
              country: 'China'
            },
            latlng: {
              lat: 23.392500,
              lng: 113.298889
            }
          },
          {
            name: 'BARCELONA',
            addressDetails: {
              address: 'Barcelona, some address',
              code: '23421',
              country: 'Spain'
            },
            latlng: {
              lat: 41.390205,
              lng: 2.154007
            }
          },
        ]
      }
    },
    mounted() {
      this.changeMapPosition(this.addresses[0].latlng);
      this.changeMarkerPosition(this.addresses[0].latlng);
      this.changeActiveAddress(this.addresses[0]);
    },
    methods: {
      ...mapMutations({
        changeMapPosition: 'mapController/CHANGE_MAP_POSITION',
        changeMarkerPosition: 'mapController/CHANGE_MARKER_POSITION',
        changeActiveAddress: 'mapController/CHANGE_ACTIVE_ADDRESS'
      }),
      addressItemClickHandler(address) {
        this.changeMapPosition(address.latlng);
        this.changeMarkerPosition(address.latlng);
        this.changeActiveAddress(address);
      }
    },
    computed: {
      ...mapGetters({
        activeAddress: 'mapController/activeAddress'
      })
    }
  }
</script>

<style scoped lang="scss">
  .main-body-info {
    color: white;
    padding: 95px 60px 0;

    &__addresses {
      display: flex;
      margin-top: 40px;

      &-active {
        color: #3cb464;
      }

      li {
        font-size: 11px;
        transition: .15s;
        cursor: pointer;

        &:hover {
          color: #3cb464;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }

    &__address-details {
      margin-top: 40px;

      &-item {
        margin-top: 35px;

        li {
          font-size: 11px;
          line-height: 25px;
        }
      }
    }
  }
</style>
