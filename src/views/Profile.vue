<template>
    <div>
        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@cerise_sur_le_getho/video/6789695011886845190" data-video-id="6789695011886845190" style="max-width: 605px;min-width: 325px;" >
            <section>
                <a target="_blank" title="@cerise_sur_le_getho" href="https://www.tiktok.com/@cerise_sur_le_getho">
                    @cerise_sur_le_getho
                </a>
                <p>je m'entraîne au chant un peu</p>
                <a target="_blank" title="♬ son original - cerise_sur_le_getho" href="https://www.tiktok.com/music/son-original-6789617655436331782">
                    ♬ son original - cerise_sur_le_getho
                </a>
            </section>
        </blockquote>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        mounted() {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', 'https://www.tiktok.com/embed.js')
            document.head.appendChild(recaptchaScript)
        },
    }
</script>

<style scoped>

</style>
