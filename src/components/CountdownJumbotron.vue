<template>
  <div id="ms-container" class="ms-container d-flex justify-content-between">
    <div class="d-flex justify-content-between flex-column">
        <h3>
            Limited Sale:
            <span>
                All Courses with 55% off
            </span>
        </h3>

        <div class="d-flex justify-content-between">
            <input type="text" placeholder="Enter your E-Mail">

            <div class="button">
                Subscribe
            </div>
        </div>
    </div>

    <div class="count-wrapper d-flex justify-content-between">
        <div v-for="(number,i) in numbers" :key="i" class="count-numbers">
            <h1>
                {{ number.num }}
            </h1>
            <div>
                {{ number.text }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownJumbotron',
  data() {
      return {
          numbers: [
              {
              num: 26,
              text: 'Days'
          },
          {
              num: 1,
              text: 'Hours'
          },
          {
              num: 46,
              text: 'Minutes'
          },
          {
              num: 31,
              text: 'Seconds'
          },
          ]
      }
  }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

#ms-container {
    background-color: $buttercup;
    height: 163px;
    border-radius: 10px;
    transform: translateY(123px);
    padding: 38px 46px;

    h3 {
        color: white;
        font-weight: bold;
        font-size: 19px;

        span {
            color: $shark;
        }
    }

    input, .button {
        outline: none;
        padding: 16px 18px;
        font-size: 10px;
        color: $doveGray;
        border: none;
        border-radius: 40px;
    }

    input {
        -moz-box-shadow:    1px 1px 5px 5px rgba(0, 0, 0, 0.034);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.041);
        box-shadow:         1px 1px 5px 5px rgba(0, 0, 0, 0.048);
        width: 100%;
    }

    .button {
        background-color: #2D4649;
        position: absolute;
        transform: translateX(268px);
        text-transform: uppercase;
        color: white;
        cursor: pointer;
    }
}

.count-numbers {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0px 16.5px;
    height: 73px;
    align-items: center;

    h1 {
        color: white;
        font-size: 36px;
        font-weight: bold;
    }

    div {
        font-size: 14px;
        font-weight: bold;
    }
}

.count-numbers:last-child {
    margin-right: calc(84px - 16.5px);
}
</style>