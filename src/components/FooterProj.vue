<template>
  <div class="container-fluid">
    <div class="ms-container">
        <div class="list">
            <h3>
                ABOUT
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro ut, deleniti totam expedita deserunt maiores dignissimos eius veniam esse impedit.
            </p>
            <div>
                <span>
                    <font-awesome-icon icon="fa-brands fa-facebook" />
                </span>
                <span>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                </span>
                <span>
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                </span>
            </div>
        </div>

        <div class="list">
            <h3>
                CONTACT
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur
            </p>
            <p>
                Lorem ipsum dolor sit amet. <br>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem, ipsum dolor.
            </p>
        </div>

        <div class="list">
            <h3>
                PAGES
            </h3>
            <p class="d-flex flex-column">
                <ul class="d-flex flex-row">
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                </ul>
            </p>
        </div>

        <div class="list">
            <h3>
                BLOG
            </h3>
            
            <div class="d-flex justify-content-space-between">
                <div>
                    <img src="../assets/img/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
                </div>

                <div>
                    <h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h4>
                    <p class="paragraph2">
                        -August 9, 2018
                    </p>
                </div>
            </div>

            <div class="d-flex justify-content-space-between">
                <div>
                    <img src="../assets/img/photo-1517520287167-4bbf64a00d66-50x50.jpeg" alt="">
                </div>

                <div>
                    <h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </h4>
                    <p class="paragraph2">
                        -August 9, 2018
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterProj',
  data() {
    return {

        }
    }
}
</script>

<style scoped lang="scss">
@import '../app.scss';

.container-fluid {
    background-color: $buttercup;
    
    .ms-container {
        padding: 49px 57px;
        height: 231px;
        display: flex;
        justify-content: flex-start;
        gap: 25px;

        .list {
            height: 100%;
            width: 188px;
            
            h3 {
                font-size: 15px;
                color: $mineShaft;
                font-weight: 600;
                margin-bottom: 24px;
            }

            p {
                font-size: 12px;
                color: $mineShaft;
                font-weight: 500;
                margin-bottom: 12px;
            }

            span {
                margin-right: 13px;
            }

            ul {
                flex-wrap: wrap;
            }

            li {
                height: 33px;
                width: 50%;
            }

            h4 {
                font-size: 11px;
                color: $mineShaft;
                font-weight: 600;
                margin-bottom: 2px;
            }

            .paragraph2 {
                font-size: 9px;
                color: $abbey;
                font-weight: 500;
            }

            img {
                width: 51px;
                margin-right: 13px;
            }
        }
    }
}
</style>