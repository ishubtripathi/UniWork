const imagesUrls = ["../img/assets/ssi-mood.webp", "../img/assets/op-mood.webp", "../img/assets/va-mood.webp", "../img/assets/hy-mood.webp", "../img/assets/oa-mood.webp", "../img/assets/be-mood.webp", "../img/assets/hp-mood.webp", "../img/assets/ho-mood.webp", "../img/assets/md-mood.webp", "../img/assets/default-mood.webp"],
    glContainer = window.document.querySelector("#webglBubble");
if (MainThreeScene.init(glContainer), MainThreeScene.initTextures(imagesUrls), document.documentElement.className = "js", window.onbeforeunload = function() {
        window.scrollTo(0, 0)
    }, gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, InertiaPlugin, Flip, MotionPathPlugin), document.querySelector(".work") && isMobile()) {
    const e = () => {
        document.querySelector("body").style.minHeight = window.innerHeight + "px", document.querySelector("#smooth-wrapper").style.minHeight = window.innerHeight + "px", document.querySelector(".content.work").style.height = window.innerHeight + "px"
    };
    window.matchMedia("(max-width: 1024px)").matches && (window.addEventListener("resize", e), e())
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

function iPhone() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function isAndroid() {
    return /Android/i.test(navigator.userAgent)
}
gsap.config({
    nullTargetWarn: !1
}), gsap.to(".blur-circle", {
    scale: 1,
    opacity: .3,
    delay: .35,
    duration: 1,
    ease: "power4.inOut"
});
let thisClass, scrollFixCta, ctaFixIn, mouseX = 0,
    mouseY = 0,
    ballX = 0,
    ballY = 0,
    ballSpeed = .17,
    heroAnim = gsap.timeline({
        paused: !0
    });
const hamburger = document.querySelector("#hamburger"),
    logo = document.querySelector("#logo"),
    bodyTag = document.querySelector("body"),
    wrapper = document.querySelector("#smooth-wrapper"),
    contentTag = document.querySelector(".content"),
    workDetail = document.querySelector(".work-detail");
let shapeStart, page2, page3, menuMid, menuEnd, pageMaster = gsap.timeline({
        paused: !0
    }),
    hambIcon = gsap.timeline({
        paused: !0
    }),
    menuBgAnim = gsap.timeline({
        paused: !0
    }),
    pageShape = document.querySelectorAll(".page-to-page svg"),
    easterPath = "M830 439.5C830 472.244 816.831 501.911 795.5 523.496C773.836 545.417 743.754 559 710.5 559C677.246 559 647.164 545.417 625.5 523.496C604.169 501.911 591 472.244 591 439.5C591 408.056 603.145 379.448 623 358.111C644.818 334.665 675.946 320 710.5 320C747.397 320 780.387 336.722 802.308 363C819.597 383.727 830 410.398 830 439.5Z";
if (isMobile()) {
    if (isMobile()) {
        function reportWindowSize() {
            document.querySelector(".page-to-page").style.height = window.innerHeight + 60 + "px"
        }
        shapeStart = "M0 9.92881e-05C23 -0.00012411 47.5 9.92881e-05 60 9.92881e-05C72.5 9.92881e-05 105 9.92881e-05 120 9.92881e-05C135 9.92881e-05 160.5 0 180 0C199.5 0 221 9.92881e-05 240 9.92881e-05C259 9.92881e-05 283 9.92881e-05 300 9.92881e-05C317 9.92881e-05 336 9.92881e-05 360 9.92881e-05C360 34 360 751 360 751H0C0 751 0 35.0003 0 9.92881e-05Z", page2 = "M0 209.5C23 209.5 21 491 60 491C99 491 83 281 120 281C157 281 141 368 180 368C219 368 205 209.5 240 209.5C275 209.5 267 424 300 424C333 424 336 311 360 311C360 345 360 751 360 751H0C0 751 0 244.5 0 209.5Z", page3 = "M0 750C23 750 21 750 60 750C99 750 83 750 120 750C157 750 141 750 180 750C219 750 205 750 240 750C275 750 267 750 300 750C333 750 336 750 360 750C360 750.999 360 750.999 360 750.999H0.000144839C0.000144839 750.999 0 750.999 0 750Z", menuMid = "M0 202.5C23 202.5 21 125 60 125C99 125 83 272.5 120 272.5C157 272.5 141 96.5 180 96.5C219 96.5 205 330.5 240 330.5C275 330.5 267 215.5 300 215.5C333 215.5 336 265 360 265C360 299 360 751 360 751H0C0 751 0 237.5 0 202.5Z", menuEnd = "M0 464.5C23 464.5 46 464.5 60 464.5C74 464.5 100.5 464.5 120 464.5C139.5 464.5 164.5 464.5 180 464.5C195.5 464.5 223 464.5 240 464.5C257 464.5 289 464.5 300 464.5C311 464.5 336 464.5 360 464.5C360 498.5 360 751 360 751H0C0 751 0 499.5 0 464.5Z", reportWindowSize(), window.onresize = reportWindowSize, pageShape.forEach((e => {
            e.setAttribute("viewBox", "0 0 360 751");
            let t = e.querySelector("path:last-of-type");
            gsap.set(t, {
                morphSVG: shapeStart
            })
        }))
    }
} else shapeStart = "M0 20C0 8.95429 8.86995 0 19.9156 0C68.0089 0 189.957 0 236.667 0C317.505 0 392.495 0 473.333 0C556.906 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1273.85 0 1361.73 0 1400 0C1411.05 0 1420 8.95431 1420 20V860C1420 871.046 1411.05 880 1400 880H20C8.95432 880 0 871.046 0 860V20Z", page2 = "M0 281.943C0 260.021 33.5348 252.576 43.9009 271.893C88.8096 355.58 162.35 466.5 236.667 466.5C356 466.5 365 107.333 472 107.333C579 107.333 626.428 225.5 710 225.5C800.016 225.5 856.651 0.5 946.667 0.5C1067.34 0.5 1062.66 414 1183.33 414C1257.18 414 1329.27 246.617 1374.1 116.704C1381.76 94.5095 1420 100.218 1420 123.698V638C1420 649.046 1411.05 658 1400 658H20C8.95432 658 0 649.046 0 638V281.943Z", page3 = "M0 1.5C0 0.671573 0.644757 0 1.47318 0C15.3551 0 125.137 0 236.667 0C356 0 365 0 472 0C579 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1296.08 0 1404.74 0 1418.53 0C1419.36 0 1420 0.671573 1420 1.5V1.5C1420 2.32843 1419.33 3 1418.5 3H1.49997C0.671538 3 0 2.32843 0 1.5V1.5Z", menuMid = "M0 330.791C0 314.732 18.1732 304.806 32.0206 312.937C78.3273 340.127 166.163 385.5 236.667 385.5C337.333 385.5 392.495 0.5 473.333 0.5C556.906 0.5 626.428 331 710 331C800.016 331 856.651 122 946.667 122C1067.34 122 1062.66 486.5 1183.33 486.5C1257.01 486.5 1328.93 297.715 1373.79 150.656C1380.74 127.87 1420 133.102 1420 156.924V840C1420 851.046 1411.05 860 1400 860H20C8.95432 860 0 851.046 0 840V330.791Z", menuEnd = "M0 20C0 8.95431 8.88486 0 19.9306 0C61.3757 0 159.423 0 236.667 0C337.333 0 392.495 0 473.333 0C556.906 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1273.85 0 1361.73 0 1400 0C1411.05 0 1420 8.95431 1420 20V304C1420 315.046 1411.05 324 1400 324H20C8.95432 324 0 315.046 0 304V20Z", pageShape.forEach((e => {
    e.setAttribute("viewBox", "0 0 1420 880");
    let t = e.querySelector("path:last-of-type");
    gsap.set(t, {
        morphSVG: shapeStart
    })
}));
if (isMobile()) {
    function pageOut() {
        let e = gsap.timeline();
        return e.to("#pageBgAnim", {
            morphSVG: page2,
            duration: .8,
            ease: "expo.in"
        }), e.to(".page-to-page svg:nth-of-type(2)", {
            duration: .8,
            ease: "expo.in"
        }, "<"), e.to("#pageBgAnim", {
            morphSVG: page3,
            duration: .8,
            ease: "expo.out"
        }), e.to(".page-to-page svg:nth-of-type(2)", {
            duration: .8,
            ease: "expo.out"
        }, "<"), e
    }

    function pageIn() {
        let e = gsap.timeline();
        return e.to("#pageBgAnim2", {
            delay: .2,
            morphSVG: page2,
            duration: .8,
            ease: "expo.in"
        }), e.to(".page-to-page svg:first-of-type", {
            yPercent: 100,
            duration: .8,
            ease: "expo.in"
        }, "<"), e.to("#pageBgAnim2", {
            morphSVG: shapeStart,
            duration: .8,
            ease: "expo.out"
        }), e.to(".page-to-page svg:first-of-type", {
            yPercent: 100,
            duration: .8,
            ease: "expo.out"
        }, "<"), e
    }
} else if (!isMobile()) {
    function pageOut() {
        let e = gsap.timeline();
        return e.to("#pageBgAnim", {
            morphSVG: page2,
            duration: .8,
            ease: "expo.in"
        }), e.to(".page-to-page svg:nth-of-type(2)", {
            yPercent: 50,
            duration: .8,
            ease: "expo.in"
        }, "<"), e.to("#pageBgAnim", {
            morphSVG: page3,
            duration: .8,
            ease: "expo.out"
        }), e.to(".page-to-page svg:nth-of-type(2)", {
            yPercent: 100,
            duration: .8,
            ease: "expo.out"
        }, "<"), e
    }

    function pageIn() {
        let e = gsap.timeline();
        return e.to("#pageBgAnim2", {
            delay: .2,
            morphSVG: page2,
            duration: .8,
            ease: "expo.in"
        }), e.to(".page-to-page svg:first-of-type", {
            yPercent: 50,
            duration: .8,
            ease: "expo.in"
        }, "<"), e.to("#pageBgAnim2", {
            morphSVG: shapeStart,
            duration: .8,
            ease: "expo.out"
        }), e.to(".page-to-page svg:first-of-type", {
            yPercent: 100,
            duration: .8,
            ease: "expo.out"
        }, "<"), e
    }
}
pageMaster.add(pageOut()).add(pageIn(), "-=1.6");
let smoother, easeValA = "M0,0 C0,0 0.236,-0.014 0.337,0.114 0.485,0.302 0.314,0.662 0.514,0.86 0.681,1.026 1,1 1,1",
    easeValB = "M0,0 C0,0 0.026,0.439 0.24,0.778 0.377,0.995 0.668,1 0.816,1 0.947,1 1,1 1,1",
    easeValC = "M0,0 C0.123,-0.014 0.24,0.031 0.306,0.078 0.537,0.241 0.441,0.677 0.56,0.836 0.626,0.924 0.698,1 1,1 ",
    customEaseA = CustomEase.create("custom", easeValA),
    customEaseB = CustomEase.create("custom", easeValB),
    customEaseC = CustomEase.create("custom", easeValC);

function smoothScroll() {
    if (!isMobile() && window.innerWidth > 768) {
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: ".content",
            smooth: 1.2,
            effects: !0,
            normalizeScroll: !0
        }), smoother.effects(".parallax-wrap img", {
            speed: "auto"
        }), document.querySelectorAll(".parallax-img").forEach((e => {
            let t = e.querySelector("img").offsetHeight + "px";
            e.style.height = t
        })), smoother.effects(".parallax-img img", {
            speed: ".75"
        });
        return gsap.utils.toArray(".scroll-to").forEach((e => {
            const t = e.dataset.scroll;
            e.addEventListener("click", (function() {
                smoother.scrollTo("#" + t, !0, "top 0%")
            }))
        })), smoother
    }
}
smoothScroll();
const menuWrap = document.querySelector("#menu-slide"),
    social = document.querySelector("#menu-slide .social"),
    navLink = gsap.utils.toArray("#menu-slide .nav-link");
let menuPath, pagePath, isOpen;
gsap.set(navLink, {
    pointerEvents: "none"
}), gsap.set([social, navLink], {
    opacity: 0
});
const menuOpen = function() {
    menuBgAnim.to("#pageBgAnim", {
        morphSVG: menuMid,
        duration: .6,
        ease: "expo.in"
    }), menuBgAnim.to("#pageBgAnim", {
        morphSVG: menuEnd,
        duration: .6,
        ease: "expo.out"
    }), isMobile() ? isMobile() && menuBgAnim.to(".page-to-page svg", {
        yPercent: 0,
        duration: .6,
        ease: "expo.out"
    }, "<") : menuBgAnim.to(".page-to-page svg", {
        yPercent: 63,
        duration: .6,
        ease: "expo.out"
    }, "<");
    lineB = "M21 30H9", lineC = "M25.0784 25V25.5", pointA = "M5.07843 35L9 32.4482L9 27.6127L5.07843 25L1.07843 27.6127L1 32.4482L5.07843 35Z", pointB = "M25.0784 35L29 32.4482V27.6127L25.0784 25L21.0784 27.6127L21 32.4482L25.0784 35Z", hambIcon.to(".lineA", {
        morphSVG: "M5.07849 34.5V35",
        duration: 1,
        ease: "power4.inOut"
    }), hambIcon.to(".lineB", {
        morphSVG: lineB,
        duration: 1,
        ease: "power4.inOut"
    }, "<"), hambIcon.to(".lineC", {
        morphSVG: lineC,
        duration: 1,
        ease: "power4.inOut"
    }, "<"), hambIcon.to(".pointA", {
        morphSVG: pointA,
        duration: 1,
        ease: "power4.inOut"
    }, "<"), hambIcon.to(".pointB", {
        morphSVG: pointB,
        duration: 1,
        ease: "power4.inOut"
    }, "<");
    menuInner = gsap.timeline({
        onStart: function() {
            wrapper.classList.add("is-exiting"), gsap.to(glContainer, {
                opacity: 0,
                duration: .3,
                ease: "power4"
            }), gsap.to(".page-to-page svg:first-of-type", {
                opacity: 0,
                duration: .3
            })
        },
        onReverseComplete: function() {
            wrapper.classList.remove("is-exiting"), gsap.to(glContainer, {
                opacity: 1,
                duration: .3,
                ease: "power4"
            }), gsap.to(".page-to-page svg:first-of-type", {
                opacity: 1,
                duration: .3
            }), gsap.to(navLink, {
                pointerEvents: "none"
            })
        },
        paused: !0
    }), menuInner.to(menuWrap, {
        y: "0%",
        duration: .35,
        ease: "power4"
    }), menuInner.to(navLink, {
        y: "0%",
        opacity: 1,
        duration: .9,
        stagger: {
            amount: .1
        },
        onStart: () => {
            gsap.to(navLink, {
                pointerEvents: "auto"
            })
        },
        ease: CustomEase.create("custom", "M0,0 C0,0 0.259,-0.011 0.364,0.158 0.48,0.346 0.394,0.716 0.53,0.874 0.63,0.99 0.842,1 0.874,1 0.964,1 1,1 1,1 ")
    }), menuInner.to(social, {
        y: "150%",
        opacity: 1,
        duration: .6,
        ease: "power4"
    }, "-=.5")
};

function triggerDotAnim() {
    let e = gsap.utils.toArray(".ecMove"),
        t = window.innerWidth / 2,
        o = window.innerHeight / 2;
    e.forEach((e => {
        let a = e.getBoundingClientRect().left,
            s = e.getBoundingClientRect().top,
            i = e.getBoundingClientRect().width,
            n = e.getBoundingClientRect().width;
        gsap.set(e, {
            x: t - a - i / 2,
            y: o - s - n / 2,
            opacity: 1,
            scale: 0
        })
    }));
    let a = gsap.timeline({
            paused: !0
        }),
        s = gsap.utils.random(10, 18, 1, !0);
    gsap.utils.random(10, 50, 1, !0);
    a.to(e, {
        motionPath: {
            path: [{
                xPercent: 0,
                yPercent: 0
            }, {
                xPercent: -20,
                yPercent: 20
            }, {
                xPercent: 16,
                yPercent: -9
            }, {
                xPercent: 3,
                yPercent: 24
            }, {
                xPercent: 0,
                yPercent: 0
            }],
            curviness: 4
        },
        stagger: {
            amount: .1,
            yoyo: !1,
            repeat: -1
        },
        duration: s,
        ease: "linear",
        repeat: -1
    });
    let i = gsap.timeline({
        paused: !0,
        onStart: () => {
            smoother.paused(!0)
        },
        onReverseComplete: () => {
            smoother.paused(!1), a.pause()
        }
    });
    gsap.set(".ec.main", {
        scale: 0
    });
    let n = gsap.timeline({
        paused: !0
    });
    i.to(["#logo", "#hamburger"], {
        opacity: 0,
        duration: 1,
        pointerEvents: "none",
        ease: "power4",
        onStart: () => {
            smoother.scrollTo("#hero", !0, "top 0%")
        }
    }), i.to(".ec.main", {
        scale: 1,
        duration: 1.5,
        ease: customEaseC
    }, "<"), i.to("#pageBgAnim", {
        morphSVG: {
            shape: easterPath,
            type: "rotational"
        },
        duration: 1.5,
        ease: customEaseC
    }, "<"), i.to("#blurDeviation", {
        duration: 1.5,
        attr: {
            stdDeviation: 17
        },
        ease: customEaseC
    }, "<"), i.to(e, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.75,
        stagger: .1,
        ease: customEaseB,
        onStart: () => {
            a.play()
        }
    }, "-=.8"), i.to("#easterImg", {
        opacity: 1,
        duration: 1,
        ease: "power4",
        onComplete: function() {
            function e(e, t, o) {
                if (bodyTag.classList.contains("easterOn")) {
                    let a = e.pageX - wrapper.getBoundingClientRect().left,
                        s = e.pageY - wrapper.getBoundingClientRect().top;
                    gsap.to(t, {
                        duration: 1,
                        x: (a - wrapper.offsetWidth / 2) / wrapper.offsetWidth * o,
                        y: (s - wrapper.offsetHeight / 4) / wrapper.offsetHeight * o
                    })
                } else gsap.to(t, {
                    duration: .25,
                    x: 0,
                    y: 0
                })
            }
            wrapper.addEventListener("mousemove", (function(t) {
                e(t, "#easterImg img:first-of-type", 5), e(t, "#easterImg img:nth-of-type(2)", 15), e(t, "#easterImg img:nth-of-type(3)", 40), e(t, "#easterImg img:nth-of-type(4)", 40), e(t, "#magic-keys", 20), e(t, ".ec.main", 30)
            }))
        }()
    }, "-=1.25"), n.clear();
    let r = document.querySelector("#easterEgg"),
        c = gsap.timeline(),
        l = document.querySelector("#magic-close");
    gsap.set(l, {
        pointerEvents: "none",
        scale: 0
    });
    let u = new SplitText(".about #hero h1", {
        type: "lines, chars"
    });
    gsap.set(".about #hero h1", {
        perspective: 400
    }), gsap.set(u.chars, {
        transformOrigin: "0% 100%",
        scale: 6,
        opacity: 0,
        rotate: 45,
        y: window.innerHeight
    });
    let d = gsap.timeline({
        paused: !0,
        repeat: -1
    });
    gsap.utils.toArray("#magic-keys p").forEach((e => {
        let t = new SplitText(e, {
            type: "chars"
        });
        gsap.set(t.chars, {
            yPercent: -105,
            opacity: 0,
            scaleY: .5
        }), d.to(t.chars, {
            yPercent: 0,
            opacity: 1,
            scaleY: 1,
            duration: .5,
            stagger: {
                amount: .1
            },
            ease: "power4"
        }), d.to(t.chars, {
            yPercent: 105,
            duration: .5,
            delay: .8,
            opacity: 0,
            scaleY: .5,
            stagger: {
                amount: .1
            },
            ease: "power4.in"
        })
    }));
    let g = document.querySelector("#magicAudio");

    function p() {
        n.reverse().timeScale(-2)
    }
    g.volume = 0, gsap.to(u.chars, {
        delay: .5,
        transformOrigin: "0% 100%",
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        delay: .8,
        stagger: {
            amount: .3
        },
        y: 0,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 "),
        onComplete: () => {
            c.set("#easterEgg div", {
                scale: 1
            }), c.to("#easterEgg div", {
                scaleY: .8,
                scaleX: 1,
                transformOrigin: "center center",
                duration: .6,
                ease: "power1.inOut",
                stagger: {
                    amount: .3,
                    from: "start",
                    yoyo: !0,
                    repeat: -1
                }
            })
        }
    }), n.to(".about h1 div div div", {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: {
            amount: .25
        },
        ease: "expo.inOut"
    }), n.to(["#breadcrumb", "#fixed-cta", ".scroll-to"], {
        opacity: 0,
        duration: 1,
        pointerEvents: "none",
        ease: "power4"
    }, "<"), n.to(l, {
        scale: 1,
        duration: .75,
        ease: "power4",
        onComplete: () => {
            d.play(), l.addEventListener("mouseenter", (function() {
                gsap.to("#magic-close div", {
                    scale: 1.2,
                    duration: 1,
                    ease: "elastic"
                }), gsap.to("#magic-close i:first-of-type", {
                    rotateZ: 0,
                    duration: .5,
                    ease: "expo"
                }), gsap.to("#magic-close i:nth-of-type(2)", {
                    rotateZ: 0,
                    duration: .5,
                    ease: "expo"
                })
            })), l.addEventListener("mouseleave", (function() {
                gsap.to("#magic-close div", {
                    scale: 1,
                    duration: 1,
                    ease: "elastic"
                }), gsap.to("#magic-close i:first-of-type", {
                    rotateZ: 45,
                    duration: 1,
                    ease: "elastic"
                }), gsap.to("#magic-close i:nth-of-type(2)", {
                    rotateZ: -45,
                    duration: 1,
                    ease: "elastic"
                })
            }))
        }
    }), n.to("#magic-keys", {
        scale: 1,
        duration: .75,
        ease: "power4",
        onStart: () => {
            l.style.pointerEvents = "auto"
        },
        onReverseComplete: () => {
            r.style.pointerEvents = "auto", d.pause(0)
        }
    }), g.src = "../video/magic-ambient.ogg", r.addEventListener("click", (function() {
        c.pause(), r.style.pointerEvents = "none", g.play();
        for (let e = 0; e < 100; e++) setTimeout((() => {
            g.volume = 0 + .01 * e
        }), 10 * e);
        i.play().timeScale(1), n.play().timeScale(1), bodyTag.classList.add("easterOn"), r.classList.add("active")
    })), l.addEventListener("click", (function() {
        l.style.pointerEvents = "none", c.play();
        for (let e = 0; e < 100; e++) setTimeout((() => {
            g.volume = 1 - .01 * e, 99 == e && g.pause()
        }), 10 * e);
        i.reverse().timeScale(-2), gsap.delayedCall(.5, p), bodyTag.classList.remove("easterOn"), r.classList.remove("active")
    }))
}
if (menuOpen(), hamburger.addEventListener("click", (function() {
        const e = document.querySelector("#fixed-cta");
        hamburger.classList.contains("active") ? (hambIcon.reverse(), menuBgAnim.reverse(), menuInner.reverse(), hamburger.classList.remove("active"), logo.classList.remove("active"), document.querySelector("#fixed-cta") > 0 && e.classList.contains("active") && gsap.to(e, {
            opacity: 1,
            delay: 1,
            duration: .2,
            ease: "power4"
        }), isMobile() || smoother.paused(!1)) : (hambIcon.restart(), menuBgAnim.restart(), menuInner.restart(), hamburger.classList.add("active"), logo.classList.add("active"), document.querySelector("#fixed-cta") && e.classList.contains("active") && gsap.to(e, {
            opacity: 0,
            duration: .2,
            ease: "power4"
        }), isMobile() || smoother.paused(!0))
    })), document.querySelector(".about") && !isMobile()) triggerDotAnim();
else {
    let t = new SplitText(".about #hero h1", {
        type: "lines, chars"
    });
    gsap.set(".about #hero h1", {
        perspective: 400
    }), gsap.set(t.chars, {
        transformOrigin: "0% 100%",
        scale: 6,
        opacity: 0,
        rotate: 45,
        y: window.innerHeight
    }), gsap.to(t.chars, {
        transformOrigin: "0% 100%",
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        delay: .8,
        stagger: {
            amount: .3
        },
        y: 0,
        ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
    })
}
PageInits = {
    lazyLoad: function() {
        document.querySelector(".lazy") && (ScrollTrigger.config({
            limitCallbacks: !0
        }), gsap.utils.toArray(".lazy").forEach((e => {
            let t = e.dataset.src,
                o = document.createElement("img"),
                a = () => {
                    o.onload = () => {
                        o.onload = null, o.src = e.src, e.src = t, gsap.set(o, {
                            position: "absolute",
                            top: e.offsetTop,
                            left: e.offsetLeft,
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }), e.parentNode.appendChild(o), gsap.to(o, {
                            opacity: 0,
                            duration: .35,
                            onComplete: () => o.parentNode.removeChild(o)
                        }), s && s.kill()
                    }, o.src = t
                },
                s = ScrollTrigger.create({
                    trigger: e,
                    start: "-50% bottom",
                    onEnter: a,
                    onEnterBack: a
                })
        })))
    },
    mainScripts: function() {
        if (function() {
                const e = document.querySelectorAll("[data-part1]");
                for (const t of e) {
                    const e = t.dataset;
                    t.setAttribute("href", `mailto:${e.part1}@${e.part2}.${e.part3}?subject=${encodeURIComponent(t.textContent)}`)
                }
            }(), gsap.utils.toArray(".circle-link").forEach((e => {
                let t = e.querySelector(".circle-icon i");
                e.addEventListener("mouseenter", (function() {
                    gsap.to(t, {
                        scale: 1.25,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.to(t, {
                        scale: 1,
                        duration: 1,
                        ease: "elastic"
                    })
                }))
            })), document.querySelector("#attitude") && !isMobile()) {
            const e = document.querySelector(".boxes"),
                t = gsap.utils.toArray(".boxes > div"),
                o = e.getBoundingClientRect().left / 2;
            let a = t[0].getBoundingClientRect().left,
                s = 0;
            for (let e = 0; e < t.length; e++) s += t[e].offsetWidth;
            const i = -s + (window.innerWidth - 4 * o),
                n = function() {
                    const e = t[0].getBoundingClientRect().left,
                        o = e - a,
                        s = Math.abs(Math.round(1.75 * o) / 100),
                        i = Math.min(Math.max(s, 0), 1);
                    gsap.to(t, {
                        scale: 1 - i / 2
                    }), a = e, requestAnimationFrame(n)
                };
            n(), gsap.to(t, {
                scrollTrigger: {
                    trigger: "#attitude",
                    start: "top top",
                    end: "bottom -=300%",
                    toggleActions: "play none reverse none",
                    scrub: !0
                },
                x: i,
                ease: "linear"
            }), gsap.to("#attitude", {
                scrollTrigger: {
                    trigger: "#attitude",
                    id: "attScroll",
                    start: "top top",
                    end: "bottom -=290%",
                    toggleActions: "play none reverse none",
                    scrub: !0,
                    pin: "#attitude"
                }
            });
            const r = gsap.utils.toArray(".hex-wrap .shape-anim polyline");
            gsap.set(r, {
                drawSVG: "0% 0%"
            });
            const c = document.querySelector("#attitude p:first-of-type"),
                l = document.querySelector("#attitude p:nth-of-type(2)");
            let u = new SplitText(l, {
                    type: "chars"
                }),
                d = gsap.timeline({
                    scrollTrigger: {
                        trigger: l,
                        start: "top 50%",
                        end: "bottom -=310%",
                        toggleActions: "play reverse play reverse",
                        scrub: .2
                    }
                });
            d.from(u.chars, {
                y: e => 100 * e,
                duration: 1,
                ease: "linear"
            }), d.to(c, {
                webkitClipPath: "inset(0% 0% 0% 0%)",
                duration: 3,
                ease: "linear"
            }), d.to(c, {
                webkitClipPath: "inset(0% 100% 0% 0%)",
                duration: 5,
                ease: "linear"
            }), d.to(u.chars, {
                y: e => -100 * e - 550,
                duration: 1,
                ease: "linear"
            });
            let g = gsap.timeline({
                scrollTrigger: {
                    trigger: l,
                    start: "bottom -=250%",
                    toggleActions: "restart none none none"
                }
            });
            g.to(".hex-wrap .shape-anim polyline", {
                drawSVG: "0% 100%",
                duration: .5,
                stagger: .1,
                ease: "power4.in"
            }), g.to(".hex-wrap .shape-anim polyline", {
                drawSVG: "100% 100%",
                duration: .5,
                stagger: .1,
                ease: "power4.out"
            }, "-=.3")
        }
        if (document.querySelector("#attitude") && isAndroid()) {
            const e = document.querySelector("#attitude"),
                t = gsap.utils.toArray(".boxes .stack"),
                o = gsap.utils.toArray(".boxes article"),
                a = document.querySelector("#attitude .about-link"),
                s = t[0].offsetHeight;
            e.style.marginBottom = "30vh", gsap.set([t, a], {
                yPercent: 150
            });
            let i = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top top",
                    end: () => "+=" + s * t.length,
                    pin: !0,
                    scrub: !0
                }
            });
            i.to(t, {
                yPercent: (e, t) => 20 * e + 15,
                stagger: 1,
                duration: 1
            }), i.to(o, {
                backgroundColor: "#171A37",
                duration: 1,
                stagger: 1
            }, "<"), i.to(a, {
                yPercent: 60,
                duration: 1
            }, "-=2")
        }
        if (document.querySelector(".client-wrap") && !isMobile()) {
            const e = document.querySelector(".client-wrap .row:first-of-type"),
                t = document.querySelector(".client-wrap .row:nth-of-type(2)"),
                o = document.querySelector(".client-wrap .row:first-of-type .bs-xl-6"),
                a = document.querySelectorAll(".client-wrap .row");
            let s = o.offsetWidth,
                i = e.getBoundingClientRect().left + s,
                n = t.getBoundingClientRect().right - s;
            const r = gsap.timeline({
                scrollTrigger: {
                    trigger: ".client-wrap",
                    id: "clientPin",
                    start: "top 20%",
                    end: "bottom top",
                    pin: "#clients",
                    scrub: !0
                }
            });
            r.to(e, {
                x: -i,
                ease: "linear"
            }), r.to(t, {
                x: n,
                ease: "linear"
            }, "<");
            const c = document.querySelector(".client-stat"),
                l = c.querySelector(".stat-bg"),
                u = c.querySelector(".stat-icon img"),
                d = gsap.utils.toArray(".client-item"),
                g = gsap.timeline({
                    repeat: -1
                });
            g.to(u, {
                duration: .3,
                scale: 1.3,
                delay: .5,
                ease: "power3.in"
            }), g.to(u, {
                duration: .3,
                scale: 1,
                ease: "power3.out"
            }), a.forEach((e => {
                e.addEventListener("mouseenter", (function() {
                    gsap.to(l, {
                        scale: 1.1,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.to(l, {
                        scale: 1,
                        duration: 1,
                        ease: "elastic"
                    })
                }))
            })), d.forEach((e => {
                e.addEventListener("mouseenter", (function() {
                    const e = this.dataset.client,
                        t = document.querySelector('[data-stat="' + e + '"]');
                    g.pause(), gsap.to(t, {
                        opacity: 1,
                        scale: 1,
                        duration: .4,
                        ease: "power4"
                    }), u.classList.add("invisible")
                })), e.addEventListener("mouseleave", (function() {
                    const e = this.dataset.client,
                        t = document.querySelector('[data-stat="' + e + '"]');
                    gsap.to(t, {
                        opacity: 0,
                        scale: .5,
                        duration: .4,
                        ease: "power4"
                    }), u.classList.remove("invisible"), g.restart()
                }))
            }))
        }
        const e = gsap.utils.toArray(".title-switch span:not(.first)"),
            t = new SplitText(e, {
                type: "chars"
            }),
            o = document.querySelector(".button-switch img");
        let a = 0,
            s = -0;
        if (gsap.set(t.chars, {
                yPercent: 102
            }), document.querySelector(".button-switch")) {
            const e = document.querySelector(".button-switch"),
                t = gsap.utils.toArray(".button-switch i"),
                i = gsap.timeline(),
                n = function() {
                    i.to(t, {
                        scale: 1.1,
                        stagger: {
                            amount: 0,
                            from: "end"
                        },
                        duration: .35,
                        ease: "back",
                        onStart: () => {
                            e.classList.add("hovered")
                        }
                    })
                },
                r = function() {
                    i.to(e.querySelector("i:first-of-type"), {
                        scale: .55,
                        duration: .2,
                        ease: "back"
                    }), i.to(e.querySelector("i:nth-of-type(2)"), {
                        scale: .7,
                        duration: .2,
                        ease: "back"
                    }, "<"), i.to(e.querySelector("i:nth-of-type(3)"), {
                        scale: .85,
                        duration: .2,
                        ease: "back"
                    }, "<"), i.to(e.querySelector("i:nth-of-type(4)"), {
                        scale: 1,
                        duration: .2,
                        ease: "back",
                        onComplete: () => {
                            e.classList.remove("hovered")
                        }
                    }, "<")
                },
                c = function() {
                    const e = gsap.timeline();
                    let t = a,
                        i = gsap.utils.toArray('[data-ch="' + t + '"] > div');
                    s += 180, a += 1, a > 3 && (a = 0);
                    let n = gsap.utils.toArray('[data-ch="' + a + '"] > div');
                    e.to(i, {
                        yPercent: -110,
                        stagger: {
                            amount: .1
                        },
                        duration: 1,
                        ease: "elastic"
                    }), e.to(n, {
                        yPercent: 0,
                        stagger: {
                            amount: .1
                        },
                        duration: 1,
                        ease: "elastic",
                        onComplete: function() {
                            gsap.set(i, {
                                yPercent: 110
                            })
                        }
                    }, "<"), e.to(o, {
                        rotate: s,
                        ease: "back"
                    }, "<")
                };
            isMobile() || (e.addEventListener("mouseenter", (function() {
                i.isActive() || n()
            })), e.addEventListener("mouseleave", (function() {
                r()
            }))), e.addEventListener("click", (function() {
                c()
            }))
        }
        if (document.querySelector(".jelly-button")) {
            gsap.utils.toArray(".jelly-button").forEach((e => {
                const t = e.querySelector(".jb-bg");
                e.addEventListener("mouseenter", (function() {
                    gsap.to(t, {
                        scale: 1.1,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.to(t, {
                        scale: 1,
                        duration: 1,
                        ease: "elastic"
                    })
                }))
            }))
        }
        if (document.querySelector(".button")) {
            gsap.utils.toArray(".button").forEach((e => {
                const t = e.querySelector("span:first-of-type");
                e.querySelector("i");
                e.addEventListener("mouseenter", (function() {
                    gsap.timeline().to(t, {
                        scale: 1.1,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.timeline().to(t, {
                        scale: 1,
                        duration: 1,
                        ease: "elastic"
                    })
                }))
            }))
        }
        if (document.querySelector(".usp-carousel")) {
            let e = document.querySelectorAll(".usp-carousel .inner"),
                t = e.length,
                o = .4,
                a = 1.25,
                s = o + a,
                i = s * (t - 1) + a;
            gsap.timeline({
                repeat: 20,
                scrollTrigger: {
                    trigger: ".usp-carousel",
                    start: "top 90%",
                    toggleActions: "play pause play none"
                }
            }).from(e, {
                y: "100%",
                duration: o,
                stagger: {
                    each: s,
                    repeat: -1,
                    repeatDelay: i
                }
            }).to(e, {
                y: "-100%",
                duration: o,
                stagger: {
                    each: s,
                    repeat: -1,
                    repeatDelay: i
                }
            }, s)
        }
        if (!isMobile() && document.querySelector(".scrollPattern")) {
            const e = document.querySelector(".content"),
                t = document.querySelector(".scrollPattern"),
                o = t.querySelector(".patternTop"),
                a = t.querySelector(".patternBottom");
            let s = e.getBoundingClientRect().top,
                i = e.getBoundingClientRect().top;
            const n = function() {
                const t = e.getBoundingClientRect().top,
                    r = t - s,
                    c = Math.abs(Math.round(5 * r) / 100),
                    l = Math.min(Math.max(c, 0), 1);
                newValue = e.getBoundingClientRect().top, i < newValue ? (gsap.to(o, {
                    y: 100 * l + "%"
                }), gsap.to(a, {
                    y: 0
                })) : i > newValue && (gsap.to(o, {
                    y: 0
                }), gsap.to(a, {
                    y: 100 * -l + "%"
                })), i = newValue, s = t, requestAnimationFrame(n)
            };
            n()
        }
        if (document.querySelector("#fixed-cta")) {
            const e = document.querySelector("#fixed-cta"),
                t = e.querySelector("i");
            (function() {
                gsap.set([".handle-a", ".tip-a"], {
                    opacity: 0
                });
                let o = gsap.timeline({
                    paused: !0
                });
                o.to(".handle-b", {
                    transformOrigin: "bottom right",
                    scale: .2,
                    opacity: 0,
                    x: 30,
                    y: 30,
                    duration: .6,
                    ease: "expo.out"
                }), o.to(".tip-b", {
                    transformOrigin: "bottom right",
                    scale: .2,
                    opacity: 0,
                    x: 30,
                    y: 30,
                    duration: .6,
                    ease: "expo.out"
                }, "<"), o.to(".handle-a", {
                    opacity: 1,
                    morphSVG: "M27.4142 29.9237C26.6332 30.7047 26.6332 31.9711 27.4142 32.7521L43.5938 48.9316C43.8613 49.1992 44.1993 49.3854 44.5684 49.4685L50.8933 50.8933L49.4685 44.5685C49.3854 44.1993 49.1992 43.8613 48.9316 43.5938L32.7521 27.4142C31.971 26.6332 30.7047 26.6332 29.9237 27.4142L27.4142 29.9237Z",
                    duration: .6,
                    ease: "expo.out"
                }, "-=.5"), o.to(".tip-a", {
                    opacity: 1,
                    morphSVG: "M49.7919 50.1349L45 49L49 45L49.7919 50.1349Z",
                    duration: .6,
                    ease: "expo.out"
                }, "<");
                e.addEventListener("mouseenter", (function() {
                    o.restart(), gsap.to(t, {
                        scale: 1.25,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.to(t, {
                        scale: 1,
                        duration: 1,
                        ease: "elastic"
                    })
                })), e.addEventListener("click", (function() {
                    gsap.to(glContainer, {
                        opacity: 0,
                        duration: .5,
                        ease: "power4"
                    })
                })), e.addEventListener("click", (function() {
                    this.classList.contains("opened") ? (history.back(), e.classList.remove("opened")) : e.classList.add("opened")
                }))
            })(), scrollFixCta = function() {
                ctaFixIn = gsap.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: ".contact-link",
                        start: "bottom bottom",
                        toggleActions: "play pause play reverse"
                    }
                }), ctaFixIn.to(e, {
                    scale: 0,
                    duration: .4,
                    ease: "expo.inOut"
                })
            }, scrollFixCta()
        }
        if (document.querySelector(".view") && (gsap.set(".view", {
                opacity: 0
            }), isMobile() ? ScrollTrigger.batch(".view", {
                scroller: "body",
                start: "top 90%",
                onEnter: e => gsap.to(e, {
                    opacity: 1,
                    duration: .8,
                    y: 0,
                    stagger: .1,
                    ease: customEaseB
                })
            }) : ScrollTrigger.batch(".view", {
                start: "top bottom",
                onEnter: e => gsap.to(e, {
                    opacity: 1,
                    duration: .9,
                    y: 0,
                    stagger: .1,
                    ease: customEaseB
                }),
                onLeaveBack: e => gsap.to(e, {
                    opacity: 0,
                    duration: .2,
                    y: "100%",
                    stagger: .1,
                    ease: customEaseA
                })
            })), document.querySelector(".img-view") && !isMobile() && (gsap.set(".img-view", {
                opacity: 1
            }), isMobile() ? ScrollTrigger.batch(".img-view", {
                scroller: "body",
                start: "top 90%",
                onEnter: e => gsap.to(e, {
                    opacity: 1,
                    duration: .8,
                    y: 0,
                    stagger: .1,
                    ease: "expo"
                })
            }) : ScrollTrigger.batch(".img-view", {
                start: "top 99%",
                onEnter: e => gsap.to(e, {
                    opacity: 1,
                    duration: 1,
                    y: 0,
                    stagger: .1,
                    ease: "expo"
                })
            })), document.querySelector(".section-title")) {
            gsap.utils.toArray(".section-title").forEach((e => {
                const t = e.querySelector("i:first-of-type"),
                    o = e.querySelector("i:nth-of-type(2)");
                gsap.set([t, o], {
                    scale: 0
                }), gsap.set(e, {
                    x: "2em",
                    opacity: 0
                });
                const a = gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        start: "top 90%"
                    }
                });
                a.to(e, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3"
                }), a.to(t, {
                    scale: 2,
                    duration: .4,
                    ease: "power2.in"
                }, "-=.8s"), a.to(t, {
                    scale: 1,
                    duration: .3,
                    ease: "power2.out"
                }, "-=.4"), a.to(o, {
                    scale: 1,
                    opacity: 1,
                    duration: .1,
                    ease: "power3"
                }, "-=.1"), a.to(o, {
                    scale: 0,
                    duration: .1,
                    ease: "power3"
                }), a.to(o, {
                    scale: 1,
                    duration: .1,
                    ease: "power3"
                }), a.to(o, {
                    scale: 0,
                    duration: .1,
                    ease: "power3"
                }), a.to(o, {
                    scale: 1,
                    duration: .1,
                    ease: "power3"
                })
            }))
        }
        if (document.querySelector(".side-scroll") && !isMobile()) {
            const e = document.querySelector(".side-scroll"),
                t = document.querySelector(".side-scroll"),
                o = gsap.utils.toArray(".side-scroll .side-scroll-item");
            let a = t.getBoundingClientRect().left;
            const s = function() {
                const e = t.getBoundingClientRect().left,
                    i = e - a,
                    n = Math.abs(Math.round(1.75 * i) / 100),
                    r = Math.min(Math.max(n, 0), 1);
                gsap.to(o, {
                    scale: 1 - r / 2
                }), a = e, requestAnimationFrame(s)
            };
            s();
            const i = function() {
                const t = document.querySelectorAll(".side-scroll-item"),
                    o = t[0].offsetWidth * t.length + window.innerWidth / 24 * (t.length - 1) - e.offsetWidth;
                gsap.to(e, {
                    x: -o,
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: e,
                        start: "center center",
                        toggleActions: "play reverse reverse none",
                        pin: !0,
                        end: () => "+=" + o,
                        scrub: !0
                    }
                })
            };
            i(), window.addEventListener("resize", (function() {
                i()
            }))
        } else if (document.querySelector(".side-scroll") && isAndroid()) {
            const e = gsap.utils.toArray(".side-scroll-item"),
                t = gsap.utils.toArray(".side-scroll-item .inner");
            document.querySelector(".side-scroll").style.marginBottom = "35vh", document.querySelector(".service-detail.seo") && (document.querySelector(".side-scroll").style.marginBottom = "45vh"), gsap.set(e, {
                yPercent: e => 10 * (e + 1),
                scale: 1
            });
            let o = gsap.timeline({
                scrollTrigger: {
                    trigger: ".side-scroll",
                    start: "top top",
                    end: "bottom -250%",
                    toggleActions: "play pause play none",
                    scrub: !0,
                    pin: ".side-scroll"
                }
            });
            o.to(e, {
                yPercent: e => 10 * (e + 1) - 100,
                scale: .9,
                stagger: .5,
                duration: .5,
                ease: "linear"
            }), o.to(t, {
                backgroundColor: "#171A37",
                stagger: .5,
                duration: .5,
                ease: "linear"
            }, "<")
        }
        if (document.querySelector(".mask-link") && !isMobile()) {
            gsap.utils.toArray(".mask-link").forEach((e => {
                const t = e.querySelector(".dot");
                e.addEventListener("mouseenter", (function() {
                    const e = this.offsetWidth;
                    this.classList.add("hovered"), gsap.to(t, {
                        x: -e,
                        duration: .5,
                        scale: 0,
                        ease: "power4.inOut"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    this.classList.remove("hovered"), gsap.to(t, {
                        x: 0,
                        duration: .5,
                        scale: 1,
                        ease: "power4.inOut"
                    })
                }))
            }))
        }
        const i = new FontFaceObserver("Suisse Intl"),
            n = new FontFaceObserver("TT Tunnels Bold");
        if (Promise.all([i.load(), n.load()]).then((function() {
                let e = new SplitText(".split.chars", {
                        type: "lines, chars"
                    }),
                    t = new SplitText(".split.lines", {
                        type: "lines"
                    });
                gsap.set(".split", {
                    perspective: 400
                }), gsap.set(e.chars, {
                    transformOrigin: "0% 100%",
                    y: "100%"
                }), ScrollTrigger.batch(e.chars, {
                    start: "top 90%",
                    onEnter: e => gsap.to(e, {
                        transformOrigin: "0% 100%",
                        duration: 1,
                        stagger: {
                            amount: .2
                        },
                        y: "0%",
                        ease: customEaseA
                    })
                }), gsap.set(t.lines, {
                    opacity: 0,
                    y: "150%"
                }), ScrollTrigger.batch(t.lines, {
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    onEnter: e => gsap.to(e, {
                        opacity: 1,
                        duration: 1,
                        y: 0,
                        stagger: .03,
                        ease: "expo.out"
                    }),
                    onLeaveBack: e => gsap.to(e, {
                        opacity: 0,
                        y: "150%",
                        stagger: .03,
                        ease: "power4"
                    })
                });
                const o = gsap.utils.toArray(".hero-hex polyline");
                gsap.set(o, {
                    drawSVG: "0% 0%"
                });
                const a = gsap.utils.toArray(".hero-in"),
                    s = gsap.utils.toArray(".hero-in-text");
                let i = new SplitText(".hero-split.chars", {
                    type: "lines, chars"
                });
                gsap.set(".hero-split", {
                    perspective: 400
                }), gsap.set(i.chars, {
                    transformOrigin: "0% 100%",
                    scale: 6,
                    opacity: 0,
                    rotate: 45,
                    y: window.innerHeight
                }), gsap.set(a, {
                    perspective: "400px",
                    y: 30,
                    transformOrigin: "50% 100%",
                    opacity: 0
                }), gsap.set(s, {
                    opacity: 0,
                    y: 30
                }), document.querySelector(".about") ? (heroAnim.to(a, {
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "50% 100%",
                    stagger: {
                        amount: .2
                    },
                    duration: .6,
                    ease: customEaseB
                }), heroAnim.to(".hero-hex polyline", {
                    drawSVG: "0% 100%",
                    duration: .5,
                    stagger: .1,
                    ease: "power4.in"
                }, "-=.7"), heroAnim.to(".hero-hex polyline", {
                    drawSVG: "100% 100%",
                    duration: .5,
                    stagger: .1,
                    ease: "power4.out"
                }), heroAnim.play()) : (heroAnim.to(i.chars, {
                    delay: .5,
                    transformOrigin: "0% 100%",
                    scale: 1,
                    opacity: 1,
                    rotate: 0,
                    duration: 1,
                    delay: .8,
                    stagger: {
                        amount: .3
                    },
                    y: 0,
                    ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
                }), heroAnim.to(a, {
                    scale: 1,
                    opacity: 1,
                    transformOrigin: "50% 100%",
                    y: 0,
                    stagger: {
                        amount: .2
                    },
                    duration: .6,
                    ease: customEaseB
                }, "<.6"), heroAnim.to(s, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: {
                        amount: .3
                    },
                    ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
                }, "<"), heroAnim.to(".hero-hex polyline", {
                    drawSVG: "0% 100%",
                    duration: .5,
                    stagger: .1,
                    ease: "power4.in"
                }, "-=.7"), heroAnim.to(".hero-hex polyline", {
                    drawSVG: "100% 100%",
                    duration: .5,
                    stagger: .1,
                    ease: "power4.out"
                }), heroAnim.play());
                gsap.utils.toArray(".line-anim").forEach((e => {
                    const t = e.querySelector("svg:first-of-type"),
                        o = e.querySelector("svg:nth-of-type(2)"),
                        a = e.querySelector("div"),
                        s = o.getBoundingClientRect().left,
                        i = gsap.timeline({
                            scrollTrigger: {
                                trigger: e,
                                start: "top 80%"
                            }
                        });
                    i.from([o, t], {
                        opacity: 0,
                        scale: 0,
                        duration: .5,
                        ease: customEaseB
                    }), i.from(o, {
                        x: -s,
                        duration: 1,
                        ease: customEaseB
                    }, "-=.5"), i.from(a, {
                        scaleX: 0,
                        duration: 1,
                        ease: customEaseB
                    }, "-=1")
                }))
            })), document.querySelector(".draggable")) {
            const e = document.querySelector(".draggable"),
                t = document.querySelector(".draggable .slider-inner"),
                o = gsap.utils.toArray(".draggable .slide-item"),
                a = o[0].offsetWidth,
                s = o.length,
                i = a * s;
            let n = i - window.innerWidth;
            const r = document.querySelector(".drag-progress i"),
                c = document.querySelector("#drag-ico"),
                l = document.querySelector("#drag-ico span"),
                u = window.innerWidth - e.getBoundingClientRect().right;
            t.style.width = i + "px";
            let d = t.getBoundingClientRect().left,
                g = -n - u + 10;
            if (!isMobile()) {
                const e = function() {
                    ballX += (mouseX - ballX) * ballSpeed, ballY += (mouseY - ballY) * ballSpeed;
                    const a = c.offsetHeight / 2,
                        s = c.offsetWidth / 2;
                    gsap.to(c, {
                        y: ballY - a,
                        x: ballX - s,
                        ease: "none",
                        duration: .15
                    });
                    const i = t.getBoundingClientRect().left,
                        n = t.getBoundingClientRect().left,
                        l = i - d,
                        u = Math.abs(Math.round(1.75 * l) / 100),
                        p = Math.min(Math.max(u, 0), 1);
                    let m = (-1 * (n / g - 1)).toFixed(2);
                    gsap.to(o, {
                        scale: 1 - p / 5
                    }), gsap.to(r, {
                        scaleX: m
                    }), d = i, requestAnimationFrame(e)
                };
                e()
            }
            Draggable.create(".draggable .slider-inner", {
                type: "x",
                bounds: document.querySelector(".draggable"),
                inertia: !0,
                edgeResistance: .95,
                snap: {
                    x: function(e) {
                        return Math.round(e / a) * a
                    }
                },
                onDragStart: function() {
                    gsap.to(o, {
                        x: 0,
                        stagger: .05
                    })
                },
                onDragEnd: function() {
                    gsap.to(o, {
                        x: 0,
                        stagger: .05
                    })
                }
            }), e.addEventListener("mouseenter", (function() {
                c.classList.add("moving"), gsap.to(l, {
                    scale: 1,
                    duration: .4,
                    ease: "power4"
                }), bodyTag.style.setProperty("cursor", "none")
            })), e.addEventListener("mousedown", (function() {
                e.classList.add("down"), c.classList.add("is-on"), gsap.to(l, {
                    scale: .8,
                    duration: .4,
                    ease: "power4"
                })
            })), e.addEventListener("mouseup", (function() {
                e.classList.remove("down"), c.classList.remove("is-on"), gsap.to(l, {
                    scale: 1,
                    duration: .4,
                    ease: "power4"
                })
            })), e.addEventListener("mouseleave", (function() {
                c.classList.remove("is-on"), c.classList.remove("moving"), gsap.to(l, {
                    scale: 0,
                    delay: .1,
                    duration: .3,
                    ease: "power4"
                }), bodyTag.style.setProperty("cursor", "auto")
            })), e.addEventListener("mousemove", (function(e) {
                mouseX = e.pageX, mouseY = e.clientY
            }))
        }
        if (document.querySelector(".timeline") && !isMobile()) {
            const e = document.querySelector(".num-first-item"),
                t = document.querySelector(".num-last-item"),
                o = document.querySelector(".big-num-wrap .font-acc"),
                a = document.querySelector(".timeline-side"),
                s = gsap.utils.toArray(".ts-item"),
                i = e.offsetHeight,
                n = t.offsetHeight,
                r = t.offsetWidth / 2,
                c = t.getBoundingClientRect().left + r;
            t.style.transform = `translateX(${c+"px"}) translateY(${n+"px"}) scale(.8)`, gsap.set(o, {
                opacity: 0
            });
            let l = s[0].getBoundingClientRect().left;
            const u = function() {
                const e = s[0].getBoundingClientRect().left,
                    t = e - l,
                    o = Math.abs(Math.round(1.75 * t) / 100),
                    a = Math.min(Math.max(o, 0), 1);
                gsap.to(".ts-item", {
                    scale: 1 - a / 2,
                    ease: "linear"
                }), l = e, requestAnimationFrame(u)
            };
            u();
            let d = 0;
            for (let e = 0; e < s.length; e++) d += s[e].offsetWidth;
            a.style.marginLeft = window.innerWidth + "px";
            let g = d + window.innerWidth + window.innerWidth / 24 * 2,
                p = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".timeline",
                        id: "timelineScroll",
                        start: "top top",
                        end: "bottom -=9000",
                        toggleActions: "play pause play none",
                        scrub: !0,
                        pin: ".timeline"
                    }
                });
            p.to(e, {
                y: i,
                x: "-20%",
                scale: .8,
                duration: .2,
                ease: "linear"
            }), p.to(e, {
                x: -g,
                duration: 2,
                ease: "linear"
            }), p.to(a, {
                x: -g,
                duration: 2,
                ease: "linear"
            }, "-=2.12"), p.to(t, {
                x: 0,
                duration: .3,
                ease: "linear"
            }, "-=.5"), p.to(t, {
                y: 0,
                scale: 1,
                duration: .1,
                ease: "linear"
            }, "-=.3"), p.to(o, {
                y: "60%",
                opacity: 1,
                duration: .1,
                ease: "linear"
            }, "-=.2")
        } else if (document.querySelector(".timeline") && isMobile()) {
            const e = document.querySelector(".num-first-item"),
                t = gsap.utils.toArray(".num-item"),
                o = document.querySelector(".num-last-item"),
                a = gsap.utils.toArray(".nc-push"),
                s = document.querySelector(".big-num-wrap .font-acc");
            gsap.set(s, {
                opacity: 0
            }), gsap.set(a, {
                yPercent: e => 10 * (e + 1) + 100,
                scale: .9
            });
            let i = gsap.timeline({
                scrollTrigger: {
                    trigger: ".timeline",
                    start: "top 10%",
                    end: "bottom -250%",
                    toggleActions: "play pause play none",
                    scrub: !0,
                    pin: ".timeline"
                }
            });
            i.to(e, {
                opacity: 0,
                scale: .5,
                duration: .5,
                ease: "linear"
            }), i.to(t, {
                transformOrigin: "top left",
                yPercent: -120,
                scale: 1.2,
                duration: 1,
                stagger: 1,
                ease: "linear"
            }, "<"), i.to(a, {
                yPercent: e => 10 * (e + 1),
                scale: 1,
                duration: 1,
                stagger: 1,
                ease: "linear"
            }, "<"), i.to(t, {
                transformOrigin: "0% 0%",
                yPercent: -100,
                opacity: 0,
                scale: .5,
                duration: 1,
                stagger: 1,
                ease: "linear"
            }, "-=8"), i.to(o, {
                y: 0,
                scale: 1,
                duration: 1,
                ease: "linear"
            }, "-=.5"), i.to(s, {
                opacity: 0,
                duration: .4
            }, "<")
        }
        if (document.querySelector(".lifecycle") && window.innerWidth > 1024) {
            const e = gsap.utils.toArray(".fp-item");
            let t, o = 0;
            for (e.forEach((e => {
                    const t = e.querySelector("h3"),
                        a = e.querySelector(".self-end p");
                    o = 2 * a.offsetHeight, e.classList.contains("active") || (gsap.to(t, {
                        rotation: -90,
                        scale: .4,
                        y: o,
                        transformOrigin: "0 0"
                    }), gsap.to(a, {
                        x: 100,
                        opacity: 0,
                        transformOrigin: "0 0"
                    }))
                })), t = 0; t < e.length; t++) e[t].addEventListener("mouseenter", (function() {
                const e = this.querySelector("h3"),
                    t = this.querySelector(".self-end p");
                if (!this.classList.contains("active")) {
                    let e = document.querySelectorAll(".fp-item.active");
                    for (let t = 0; t < e.length; t++) {
                        const a = e[t].querySelector("h3"),
                            s = e[t].querySelector(".self-end p");
                        o = 2 * s.offsetHeight, e[t].classList.remove("active"), gsap.to(a, {
                            rotation: -90,
                            scale: .4,
                            y: o,
                            transformOrigin: "0 0",
                            duration: .5,
                            ease: "expo"
                        }), gsap.to(s, {
                            x: 100,
                            opacity: 0,
                            transformOrigin: "0 0",
                            duration: .5,
                            ease: "expo"
                        })
                    }
                }
                this.classList.add("active"), gsap.to(e, {
                    rotation: 0,
                    y: 0,
                    scale: 1,
                    transformOrigin: "0 0",
                    duration: .5,
                    ease: "expo"
                }), gsap.to(t, {
                    x: 0,
                    opacity: 1,
                    duration: .5,
                    ease: "expo"
                })
            }))
        } else if (document.querySelector(".lifecycle") && window.innerWidth < 1024 && isAndroid()) {
            const e = gsap.utils.toArray(".fp-item.stack");
            document.querySelector(".lifecycle").style.marginBottom = "35vh", gsap.set(e, {
                yPercent: e => 10 * (e + 1),
                scale: .9
            }), gsap.timeline({
                scrollTrigger: {
                    trigger: ".flying-panes",
                    start: "top 10%",
                    end: "bottom -250%",
                    toggleActions: "play pause play none",
                    scrub: !0,
                    pin: ".lifecycle"
                }
            }).to(e, {
                yPercent: e => 10 * (e + 1) - 100,
                scale: 1,
                stagger: .5,
                duration: .5,
                ease: "linear"
            })
        }
        if (document.querySelector(".services .goal") && window.innerWidth > 768) {
            gsap.utils.toArray(".goal-boxes article").forEach((e => {
                const t = e.querySelector(".inner");
                e.addEventListener("mouseenter", (function() {
                    gsap.to(t, {
                        height: "85%",
                        duration: 1,
                        ease: "elastic.out"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    gsap.to(t, {
                        height: "100%",
                        minHeight: 400,
                        duration: 1,
                        ease: "elastic.out"
                    })
                }))
            }))
        }
        if (document.querySelector(".contact")) {
            const e = gsap.utils.toArray("#i-form button"),
                t = document.querySelector(".progress-step div.active"),
                o = document.querySelector(".progress-bar svg:nth-of-type(2) path"),
                a = document.querySelector(".step-back"),
                s = document.querySelector(".choice-selected");
            let i, n;
            gsap.set(a, {
                opacity: 0,
                pointerEvents: "none"
            }), a.addEventListener("mouseenter", (function() {
                gsap.to(".step-back i", {
                    scale: 1.25,
                    duration: 1,
                    ease: "elastic"
                })
            })), a.addEventListener("mouseleave", (function() {
                gsap.to(".step-back i", {
                    scale: 1,
                    duration: 1,
                    ease: "elastic"
                })
            })), e.forEach((e => {
                e.addEventListener("click", (function() {
                    n = this.dataset.stepTarget, i = this.dataset.previous;
                    const s = e.closest(".step-item"),
                        r = document.querySelector(".choice-selected");
                    if (!e.classList.contains("step-first")) {
                        const t = e.parentNode;
                        t.setAttribute("data-btn-parent", `${i}`);
                        const o = t.querySelector(".travel-btn");
                        o.setAttribute("data-btn-state", `${i}`);
                        const a = Flip.getState(o);
                        setTimeout((function() {
                            (o.parentNode === t ? r : t).appendChild(o), Flip.from(a, {
                                duration: .5,
                                scale: !0,
                                ease: "power4"
                            })
                        }), 50)
                    }
                    if (a.setAttribute("data-state", `${i}`), gsap.to(a, {
                            opacity: 1,
                            duration: .4,
                            pointerEvents: "auto",
                            ease: "power4"
                        }), s.classList.contains("active")) {
                        s.classList.remove("active");
                        document.querySelector('[data-step="' + n + '"]').classList.add("active")
                    }
                    gsap.to(t, {
                        scaleX: .2 * n,
                        duration: .4,
                        ease: "power4"
                    }), document.querySelector('[data-step="5"]').classList.contains("active") && (o.classList.add("last"), gsap.to(".progress-total", {
                        opacity: 1,
                        duration: .4,
                        ease: "power4"
                    }))
                }))
            })), document.querySelector("#resetForm").addEventListener("click", (function() {
                location.reload()
            })), a.addEventListener("click", (function() {
                i = this.dataset.state;
                const e = document.querySelector(".step-item.active");
                let n = e.dataset.previous;
                e.classList.remove("active"), a.setAttribute("data-state", `${n}`);
                let r = document.querySelector('[data-step="' + i + '"]'),
                    c = document.querySelector('[data-btn-state="' + i + '"]'),
                    l = document.querySelector('[data-btn-parent="' + i + '"]');
                if (r.classList.add("active"), !document.querySelector('[data-step="1"]').classList.contains("active")) {
                    const e = Flip.getState(c);
                    setTimeout((function() {
                        (c.parentNode === l ? s : l).appendChild(c), Flip.from(e, {
                            scale: !0,
                            duration: .5,
                            ease: "power4"
                        }), l.setAttribute("data-btn-parent", "0")
                    }), 50)
                }
                document.querySelector('[data-step="1"]').classList.contains("active") && gsap.to(a, {
                    opacity: 0,
                    duration: .4,
                    pointerEvents: "none",
                    ease: "power4"
                }), document.querySelector('[data-step="5"]').classList.contains("active") || (o.classList.remove("last"), gsap.to(".progress-total", {
                    opacity: .3,
                    duration: .4,
                    ease: "power4"
                })), gsap.to(t, {
                    scaleX: .2 * i,
                    duration: .4,
                    ease: "power4"
                })
            }))
        }
        if (document.querySelector(".work-listing")) {
            document.querySelectorAll(".work-listing article:not(.selected)").forEach((e => {
                const t = e.querySelector("figure i"),
                    o = e.querySelector("figure:not(.nextP)"),
                    a = e.querySelector("a");
                let s = e.querySelector(".work-listing article figure svg image"),
                    i = e.querySelector("svg mask path");
                gsap.set(s, {
                    y: -40,
                    filter: "brightness(10)"
                });
                const n = ["M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V273.428C660 293.345 632.497 302.094 619.824 286.728C592.322 253.379 555.921 217 528 217C476.451 217 447.549 349.5 396 349.5C344.451 349.5 315.549 100 264 100C212.451 100 186.526 470 132 470C80.0222 470 7.19047 174.21 0.49727 146.566C0.130269 145.05 0 143.712 0 142.153V20Z", "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V178.998C660 181.64 659.527 184.139 658.486 186.567C647.205 212.89 575.39 376 528 376C476.451 376 447.549 210.5 396 210.5C344.451 210.5 315.549 484 264 484C212.451 484 190 137.5 119 137.5C88.7592 137.5 62.6909 148.113 42.7269 160.298C26.6953 170.082 0 158.877 0 140.095V20Z", "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V257.791C660 276.718 635.047 285.974 621.649 272.606C593.948 244.966 556.543 214 528 214C476.451 214 447.549 463.5 396 463.5C344.451 463.5 315.549 159 264 159C212.451 159 190 334.5 119 334.5C53.0114 334.5 6.89062 182.901 0.708624 161.5C0.213951 159.787 0 158.097 0 156.314V20Z", "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V187.429C660 191.697 658.676 195.803 656.051 199.169C640.389 219.252 581.334 291 537 291C485.451 291 447.549 117 396 117C344.451 117 315.549 459 264 459C212.451 459 190 272 119 272C95.7351 272 74.9397 287.086 57.4934 307.37C42.755 324.507 0 314.697 0 292.095V20Z"];
                let r = n[Math.floor(Math.random() * n.length)],
                    c = gsap.timeline({
                        paused: !0
                    });
                c.to(i, {
                    morphSVG: r,
                    duration: .7,
                    ease: "power4.in"
                }), c.to(s, {
                    opacity: 1,
                    y: 0,
                    duration: 1.4,
                    filter: "brightness(1)",
                    ease: "power4.inOut"
                }, "<"), c.to(i, {
                    morphSVG: "M0 20C0 8.95429 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V640C660 651.046 651.054 660 640.008 660C612.831 660 563.545 660 528 660C476.451 660 447.549 660 396 660C344.451 660 315.549 660 264 660C212.451 660 183.549 660 132 660C96.4552 660 47.169 660 19.9915 660C8.94585 660 0 651.046 0 640V20Z",
                    duration: .7,
                    ease: "power4.out"
                }, "-=.7");
                let l = e.querySelector(".thumb-title");
                if (gsap.timeline({
                        scrollTrigger: {
                            trigger: e,
                            start: "top 70%"
                        }
                    }).to(t, {
                        opacity: 1,
                        duration: .01,
                        onComplete: function() {
                            c.play()
                        }
                    }), !isMobile()) {
                    let e = new SplitText(l, {
                        type: "chars"
                    });
                    gsap.set(e.chars, {
                        yPercent: 105
                    });
                    let t = gsap.timeline({
                        paused: !0
                    });
                    t.to(e.chars, {
                        yPercent: 0,
                        stagger: {
                            amount: .1
                        },
                        duration: .3,
                        ease: "power4.inOut"
                    }), t.to(o, {
                        y: -10,
                        duration: .3,
                        ease: "power4.inOut"
                    }, "<"), a.addEventListener("mouseenter", (function() {
                        t.isActive() || t.restart()
                    })), a.addEventListener("mouseleave", (function() {
                        t.reverse()
                    }))
                }
            }))
        }
        if (document.querySelector("video")) {
            document.querySelectorAll("video").forEach((e => {
                e.muted = !0;
                let t = e.play();
                void 0 !== t && t.then((t => {
                    new IntersectionObserver((t => {
                        t.forEach((t => {
                            1 === t.intersectionRatio || e.paused ? e.paused && e.play() : e.pause()
                        }))
                    }), {
                        threshold: .2
                    }).observe(e)
                }))
            }))
        }
        if (document.querySelector(".big-fade")) {
            gsap.utils.toArray(".big-fade").forEach((e => {
                let t = new SplitText(e, {
                    type: "chars"
                });
                gsap.timeline({
                    scrollTrigger: {
                        trigger: e,
                        start: "top 90%",
                        end: "top top",
                        toggleActions: "play reverse reverse none",
                        scrub: !0
                    }
                }).from(t.chars, {
                    yPercent: 100,
                    scale: 2,
                    color: "#000",
                    stagger: .1,
                    duration: 1,
                    ease: "power2"
                })
            }))
        }
        if (document.querySelector("#awards") && !isMobile()) {
            const e = document.querySelector("#awards"),
                t = gsap.utils.toArray(".awards-scroll span"),
                o = gsap.utils.toArray(".awards-scroll .frame"),
                a = document.querySelector("#awards .awards-content");
            gsap.set(a, {
                y: "130%"
            }), gsap.set(o, {
                rotate: function(e) {
                    return (0 * e + 1) * (20 * (Math.random() < .5 ? -1 : 1))
                },
                scale: .8,
                y: function(e) {
                    return 50 + 20 * e + "vh"
                }
            });
            let s = gsap.timeline({
                scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    end: "bottom -=200%",
                    toggleActions: "play reverse play reverse",
                    anticipatePin: 1,
                    scrub: .2
                }
            });
            ScrollTrigger.create({
                trigger: e,
                start: "top 20%",
                end: "bottom -=200%",
                toggleActions: "play reverse play reverse",
                pin: !0,
                scrub: !1
            }), s.to(t, {
                y: 0,
                color: "#171A37",
                scale: 1,
                duration: 4,
                stagger: {
                    amount: 3
                },
                ease: "power1.Out"
            }), s.to(o, {
                y: "-85vh",
                duration: 4,
                scale: 1,
                rotate: function(e) {
                    return (0 * e + 1) * (20 * (Math.random() < .5 ? -1 : 1))
                },
                stagger: {
                    amount: 3
                },
                ease: "linear"
            }, "<"), s.to(a, {
                y: "0%",
                duration: 2,
                ease: "linear"
            }, "-=2")
        }
        if (document.querySelector(".work")) {
            const e = document.querySelector(".work-slider"),
                t = document.querySelector("#work-switch"),
                o = document.querySelectorAll(".layout-b article"),
                a = gsap.timeline(),
                s = document.querySelector("#work-switch .close-icon"),
                i = document.querySelector("#work-switch .icon"),
                n = gsap.utils.toArray("#work-switch .icon > div:first-of-type i"),
                l = function() {
                    o.forEach((e => {
                        const t = e.querySelector("figure"),
                            o = e.querySelector("h2");
                        e.addEventListener("mouseenter", (function() {
                            e.classList.add("hovered");
                            let a = e.dataset.thumb;
                            MainThreeScene.changeTexture(a, !1), gsap.to(t, {
                                scale: 1,
                                duration: .4,
                                ease: "power4"
                            }), gsap.to(o, {
                                opacity: 1,
                                y: "135%",
                                duration: .4,
                                ease: "power4"
                            })
                        })), e.addEventListener("mouseleave", (function() {
                            e.classList.remove("hovered"), gsap.to(t, {
                                scale: .8,
                                duration: .4,
                                ease: "power4"
                            }), gsap.to(o, {
                                opacity: 0,
                                y: "160%",
                                duration: .4,
                                ease: "power4"
                            })
                        })), e.addEventListener("click", (function() {
                            gsap.to(glContainer, {
                                y: "0%",
                                duration: 1,
                                ease: customEaseC
                            })
                        }))
                    }))
                };
            let u = window.innerWidth / 2,
                d = "4.5vw";
            window.addEventListener("resize", (function() {
                window.innerWidth
            }));
            const g = gsap.timeline({
                    paused: !0
                }),
                p = gsap.timeline({
                    paused: !0
                });
            isMobile() ? (g.to(glContainer, {
                y: "-13%",
                duration: 1,
                ease: customEaseC
            }), g.to(".open-thumbs", {
                opacity: 0,
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(".close-thumbs", {
                opacity: 1,
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(i, {
                height: "3em",
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(".layout-b article", {
                x: 0,
                y: -50,
                transformOrigin: "50% 100%",
                stagger: {
                    amount: .2,
                    from: "center"
                },
                scale: 1,
                duration: 1,
                pointerEvents: "auto",
                ease: customEaseC
            }, "<"), g.to(n, {
                opacity: 0,
                y: 10,
                scale: 0,
                stagger: {
                    amount: .1,
                    from: "center"
                },
                duration: .5,
                ease: customEaseC
            }, "<"), g.to(s, {
                opacity: 1,
                rotateZ: -135,
                duration: .5,
                ease: customEaseC,
                onComplete: l
            }, "<.2"), p.to(glContainer, {
                y: "0%",
                duration: 1,
                ease: customEaseC
            }), p.to(".open-thumbs", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(".close-thumbs", {
                opacity: 0,
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(i, {
                height: "2em",
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(".layout-b article", {
                x: (e, t) => u - t.getBoundingClientRect().left - t.getBoundingClientRect().width / 2,
                y: d,
                transformOrigin: "50% 100%",
                stagger: {
                    amount: .2,
                    from: "center"
                },
                scale: 0,
                pointerEvents: "none",
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(s, {
                opacity: 0,
                rotateZ: 90,
                duration: .5,
                ease: customEaseC
            }, "<"), p.to(n, {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: {
                    amount: .1,
                    from: "center"
                },
                duration: .5,
                ease: customEaseC
            }, "<.2")) : (g.fromTo(glContainer, {
                y: "0%",
                duration: 1,
                ease: customEaseC
            }, {
                y: "-13%",
                duration: 1,
                ease: customEaseC
            }), g.to(".open-thumbs", {
                opacity: 0,
                y: "-1em",
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(".close-thumbs", {
                opacity: 1,
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(i, {
                height: "2.5em",
                duration: 1,
                ease: customEaseC
            }, "<"), g.to(".layout-b article", {
                x: 0,
                y: 0,
                transformOrigin: "50% 100%",
                stagger: {
                    amount: .2,
                    from: "center"
                },
                scale: 1,
                duration: 1,
                pointerEvents: "auto",
                ease: customEaseC
            }, "<"), g.to(n, {
                opacity: 0,
                y: 10,
                scale: 0,
                stagger: {
                    amount: .1,
                    from: "center"
                },
                duration: .5,
                ease: customEaseC
            }, "<"), g.to(s, {
                opacity: 1,
                rotateZ: -135,
                duration: .5,
                ease: customEaseC,
                onComplete: l
            }, "<.2"), p.to(glContainer, {
                y: "0%",
                duration: 1,
                ease: customEaseC
            }), p.to(".open-thumbs", {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(".close-thumbs", {
                opacity: 0,
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(i, {
                height: "1.5em",
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(".layout-b article", {
                x: (e, t) => u - t.getBoundingClientRect().left - t.getBoundingClientRect().width / 2,
                y: d,
                transformOrigin: "50% 100%",
                stagger: {
                    amount: .2,
                    from: "center"
                },
                scale: 0,
                pointerEvents: "none",
                duration: 1,
                ease: customEaseC
            }, "<"), p.to(s, {
                opacity: 0,
                rotateZ: 90,
                duration: .5,
                ease: customEaseC
            }, "<"), p.to(n, {
                opacity: 1,
                y: 0,
                scale: 1,
                stagger: {
                    amount: .1,
                    from: "center"
                },
                duration: .5,
                ease: customEaseC
            }, "<.2")), gsap.set(".layout-b article", {
                x: (e, t) => u - t.getBoundingClientRect().left - t.getBoundingClientRect().width / 2,
                y: d,
                scale: 0
            });
            const m = function() {
                    g.restart()
                },
                y = function() {
                    p.restart()
                };
            let h = 0,
                f = 9,
                v = 0,
                w = 0,
                S = 0,
                b = document.querySelector("#slide-cur"),
                C = document.querySelector("#slide-next"),
                L = document.querySelector("#slide-prev"),
                x = document.querySelector("#curTitle"),
                E = document.querySelector("#nextTitle"),
                q = document.querySelector("#prevTitle"),
                T = ["<a href='../work/slingshot' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Sling Shot</a>", "<a href='../work/opositive' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>O Positive</a>", "<a href='../work/valaclava' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Valaclava</a>", "<a href='../work/hoboken-yogi' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Hoboken Yogi</a>", "<a href='../work/ocean-agency' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Ocean Agency</a>", "<a href='../work/beemok' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Beemok Col</a>", "<a href='../work/hudson-properties' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Hudson Prop.</a>", "<a href='../work/helias' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Helias Oils</a>", "<a href='../work/modern-md' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Modern MD</a>"],
                A = document.querySelector("#curService"),
                M = document.querySelector("#nextService"),
                k = document.querySelector("#prevService"),
                B = ["<li>Website Design</li><li>Animations</li><li>Creative development</li><li>SEO</li> ", "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>SEO</li> ", "<li>Website Design</li><li>Development</li><li>Shopify</li><li>SEO</li> ", "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>SEO</li> ", "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>Marketing</li> ", "<li>Website Design</li><li>Development</li><li>SEO</li> ", "<li>Website Design</li><li>Animations</li> ", "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>Shopify</li> ", "<li>Website Design</li><li>Development</li><li>Marketing, SEO</li> "],
                P = gsap.utils.toArray(".work-slider .slider-inner figure img"),
                O = gsap.timeline(),
                V = gsap.timeline(),
                H = gsap.timeline();
            const I = function() {
                    L.innerHTML = "00" + S, b.innerHTML = "00" + v, C.innerHTML = "00" + w
                },
                G = function() {
                    q.innerHTML = T[S - 1], x.innerHTML = T[v - 1], E.innerHTML = T[w - 1];
                    let e = x.querySelector(".circle-icon i");
                    x.addEventListener("mouseenter", (function() {
                        gsap.to(e, {
                            scale: 1.25,
                            duration: 1,
                            ease: "elastic"
                        })
                    })), x.addEventListener("mouseleave", (function() {
                        gsap.to(e, {
                            scale: 1,
                            duration: 1,
                            ease: "elastic"
                        })
                    }))
                },
                W = function() {
                    k.innerHTML = B[S - 1], A.innerHTML = B[v - 1], M.innerHTML = B[w - 1]
                },
                Z = function() {
                    if (O.isActive()) return;
                    h -= 1, h < 0 && (h = 8), S = h, v = h + 1, w = h + 2, w > f && (w = 1), S < 1 && (S = 9), MainThreeScene.changeTexture(h, !0);
                    P.forEach((e => {
                        let t = e.dataset.page;
                        e.classList.contains("selected") && (e.classList.remove("selected"), V.to(e, {
                            zIndex: 1,
                            transformOrigin: "50% 0%",
                            duration: .001,
                            ease: "none"
                        }), V.to(e, {
                            scale: 1.5,
                            opacity: 0,
                            duration: 1,
                            ease: "power4"
                        }), V.to(e, {
                            scale: 1,
                            duration: .001,
                            ease: "linear"
                        })), t == h && (e.classList.add("selected"), H.to(e, {
                            transformOrigin: "50% 100%",
                            opacity: 0,
                            zIndex: 10,
                            scale: 1.35,
                            duration: .001,
                            ease: "none"
                        }), H.to(e, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "power4"
                        }))
                    })), O.to("#work-titles h2", {
                        y: "100%",
                        duration: 1,
                        ease: "power4"
                    }), O.to("#work-titles h2 .circle-icon", {
                        scale: 0,
                        duration: .25,
                        ease: "power4"
                    }, "<"), O.to("#work-titles #curTitle", {
                        transformOrigin: "0 0",
                        rotateZ: 20,
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.fromTo("#work-titles #prevTitle", {
                        transformOrigin: "0 0",
                        rotateZ: -20
                    }, {
                        transformOrigin: "0 0",
                        rotateZ: 0,
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.to(".work-service ul", {
                        y: "100%",
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.to("#slide-count li", {
                        y: "100%",
                        stagger: -.1,
                        duration: 1,
                        ease: "power4",
                        onComplete: function() {
                            O.to("#slide-count li", {
                                y: "0%",
                                duration: .001
                            }), O.to("#work-titles h2", {
                                y: "0%",
                                rotateZ: 0,
                                duration: .001
                            }), O.to("#work-titles h2", {
                                y: "0%",
                                rotateZ: 0,
                                duration: .001
                            }), O.to(".work-service ul", {
                                y: "0%",
                                duration: .001,
                                onComplete: function() {
                                    I(), G(), W()
                                }
                            })
                        }
                    }, "<"), O.to("#work-titles h2 .circle-icon", {
                        scale: 1,
                        duration: .4,
                        ease: "power4"
                    }, "-=.7")
                },
                D = function() {
                    if (O.isActive()) return;
                    h += 1, h > f - 1 && (h = 0), S = h, v = h + 1, w = h + 2, w > f && (w = 1), S < 1 && (S = 9), MainThreeScene.changeTexture(h, !1);
                    P.forEach((e => {
                        let t = e.dataset.page;
                        e.classList.contains("selected") && (e.classList.remove("selected"), V.to(e, {
                            zIndex: 1,
                            transformOrigin: "50% 100%",
                            duration: .001,
                            ease: "none"
                        }), V.to(e, {
                            scale: 1.5,
                            opacity: 0,
                            duration: 1,
                            ease: "power4"
                        }), V.to(e, {
                            scale: 1,
                            duration: .001,
                            ease: "linear"
                        })), t == h && (e.classList.add("selected"), H.to(e, {
                            transformOrigin: "50% 0%",
                            opacity: 0,
                            zIndex: 10,
                            scale: 1.35,
                            duration: .001,
                            ease: "none"
                        }), H.to(e, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            ease: "power4"
                        }))
                    })), O.to("#work-titles h2", {
                        y: "-100%",
                        duration: 1,
                        ease: "power4"
                    }), O.to("#work-titles h2 .circle-icon", {
                        scale: 0,
                        duration: .25,
                        ease: "power4"
                    }, "<"), O.to("#work-titles #curTitle", {
                        transformOrigin: "0 0",
                        rotateZ: -20,
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.fromTo("#work-titles #nextTitle", {
                        transformOrigin: "0 0",
                        rotateZ: 20
                    }, {
                        transformOrigin: "0 0",
                        rotateZ: 0,
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.to(".work-service ul", {
                        y: "-100%",
                        duration: 1,
                        ease: "power4"
                    }, "<"), O.to("#slide-count li", {
                        y: "-100%",
                        duration: 1,
                        ease: "power4",
                        onComplete: function() {
                            O.to("#slide-count li", {
                                y: "0%",
                                duration: .001
                            }), O.to("#work-titles h2", {
                                y: "0%",
                                rotateZ: 0,
                                duration: .001
                            }), O.to(".work-service ul", {
                                y: "0%",
                                duration: .001,
                                onComplete: function() {
                                    I(), G(), W()
                                }
                            })
                        }
                    }, "<"), O.to("#work-titles h2 .circle-icon", {
                        scale: 1,
                        duration: .4,
                        ease: "power4"
                    }, "-=.5")
                };
            window.addEventListener("wheel", (function(t) {
                e.classList.contains("muted") || document.querySelector(".content").classList.contains("work") && (t.deltaY < 0 ? Z() : t.deltaY > 0 && D())
            }));
            const R = document.querySelector(".work-slider");
            R.addEventListener("touchstart", (function(e) {
                const t = function(e) {
                    return e.touches || e.originalEvent.touches
                }(e)[0];
                r = t.clientX, c = t.clientY
            }), !1), R.addEventListener("touchmove", (function(e) {
                if (!r || !c) return;
                var t = e.touches[0].clientX,
                    o = e.touches[0].clientY,
                    a = r - t,
                    s = c - o;
                Math.abs(a) > Math.abs(s) && (a > 0 ? D() : Z());
                r = null, c = null
            }), !1);
            var r = null,
                c = null;
            t.addEventListener("click", (function() {
                if (!g.isActive())
                    if (this.classList.contains("switched")) this.classList.remove("switched"), e.classList.remove("muted"), y(), p.to("[data-layout='1']", {
                        opacity: 1,
                        pointerEvents: "auto",
                        duration: .5,
                        ease: "power4.inOut"
                    }, "<.65"), MainThreeScene.changeTexture(h, !1);
                    else {
                        if (p.isActive()) return;
                        this.classList.add("switched"), e.classList.add("muted"), a.to("[data-layout='1']", {
                            opacity: 0,
                            pointerEvents: "none",
                            duration: .5,
                            ease: "power4.inOut"
                        }), m()
                    }
            }))
        }
        if (document.querySelector(".work-detail")) {
            const e = document.querySelector(".next-project h3 a"),
                t = document.querySelector(".next-project figure");
            if (e.addEventListener("mouseenter", (function() {
                    t.classList.add("hovering"), e.classList.add("hovering"), gsap.to(t, {
                        x: 10,
                        duration: .5,
                        ease: "power4"
                    })
                })), e.addEventListener("mouseleave", (function() {
                    t.classList.remove("hovering"), e.classList.remove("hovering"), gsap.to(t, {
                        x: 0,
                        duration: .5,
                        ease: "power4"
                    })
                })), t.addEventListener("mouseenter", (function() {
                    t.classList.add("hovering"), e.classList.add("hovering"), gsap.to(t, {
                        x: 10,
                        duration: .5,
                        ease: "power4"
                    })
                })), t.addEventListener("mouseleave", (function() {
                    t.classList.remove("hovering"), e.classList.remove("hovering"), gsap.to(t, {
                        x: 0,
                        duration: .5,
                        ease: "power4"
                    })
                })), !isMobile()) {
                const e = gsap.utils.toArray(".split-screens"),
                    t = document.querySelector("#split-cursor");
                ! function e() {
                    ballX += (mouseX - ballX) * ballSpeed, ballY += (mouseY - ballY) * ballSpeed, gsap.to(t, {
                        y: ballY,
                        x: ballX,
                        ease: "none",
                        duration: .15
                    }), requestAnimationFrame(e)
                }(), e.forEach((e => {
                    const o = e.querySelectorAll(".split-item"),
                        a = e.querySelector(".split-left"),
                        s = e.querySelector(".split-right");
                    o.forEach((e => {
                        e.addEventListener("mouseenter", (function() {
                            this.classList.contains("disabled") || (t.classList.add("moving"), e.addEventListener("mousemove", (function(e) {
                                mouseX = e.pageX, mouseY = e.clientY
                            })), gsap.to(t, {
                                scale: 1,
                                duration: .35,
                                ease: "expo"
                            })), e.classList.contains("selected") ? t.classList.add("active") : t.classList.remove("active")
                        })), e.addEventListener("mouseleave", (function() {
                            t.classList.remove("moving"), gsap.to(t, {
                                scale: 0,
                                duration: .35,
                                ease: "expo"
                            })
                        }));
                        const o = e.dataset.scroll;
                        e.classList.contains("disabled") || e.addEventListener("click", (function() {
                            e.classList.contains("selected") || smoother.scrollTo('[data-target="' + o + '"]', !0, "top 15%")
                        }))
                    })), o.forEach((e => {
                        e.addEventListener("click", (function() {
                            const o = e.closest(".split-left"),
                                i = e.closest(".split-right");
                            e.classList.contains("selected") || e.classList.contains("disabled") || !o ? e.classList.contains("selected") && !e.classList.contains("disabled") && o ? (e.classList.remove("selected"), t.classList.remove("active"), gsap.to(s, {
                                x: "0",
                                delay: .1,
                                duration: 1,
                                ease: customEaseC
                            }), gsap.to(o, {
                                x: "0",
                                duration: 1,
                                ease: customEaseC
                            })) : e.classList.contains("selected") || e.classList.contains("disabled") || !i ? e.classList.contains("selected") && !e.classList.contains("disabled") && i && (e.classList.remove("selected"), t.classList.remove("active"), gsap.to(a, {
                                x: "0",
                                delay: .1,
                                duration: 1,
                                ease: customEaseC
                            }), gsap.to(i, {
                                x: "0",
                                duration: 1,
                                ease: customEaseC
                            })) : (a.classList.remove("selected"), e.classList.add("selected"), t.classList.add("active"), gsap.to(a, {
                                x: "-20.833vw",
                                duration: 1,
                                ease: customEaseC
                            }), gsap.to(i, {
                                x: "-20.833vw",
                                delay: .1,
                                duration: 1,
                                ease: customEaseC
                            })) : (s.classList.remove("selected"), e.classList.add("selected"), t.classList.add("active"), gsap.to(s, {
                                x: "20.833vw",
                                duration: 1,
                                ease: customEaseC
                            }), gsap.to(o, {
                                x: "20.833vw",
                                delay: .1,
                                duration: 1,
                                ease: customEaseC
                            }))
                        }))
                    }))
                }))
            }
            let o = 0,
                a = 1;
            const s = gsap.utils.toArray("#project-gallery figure"),
                i = document.querySelector("#gallery-btn"),
                n = document.querySelector("#gallery-btn i");
            let r = s.length;
            i.addEventListener("mouseenter", (function() {
                gsap.timeline().to(n, {
                    scale: 1.1,
                    duration: 1,
                    ease: "elastic"
                })
            })), i.addEventListener("mouseleave", (function() {
                gsap.timeline().to(n, {
                    scale: 1,
                    duration: 1,
                    ease: "elastic"
                })
            }));
            const c = gsap.timeline(),
                l = gsap.timeline(),
                u = gsap.timeline(),
                d = gsap.timeline();
            i.addEventListener("click", (() => {
                ! function(e) {
                    if (u.isActive()) return;
                    if (d.isActive()) return;
                    c.clear(), l.clear(), o += 2, o > r - 1 && (o = 0), document.querySelectorAll(".pg-left [data-list]").forEach((e => {
                        let t = e.dataset.list;
                        e.classList.contains("selected") && (e.classList.remove("selected"), c.to(e, {
                            zIndex: 1,
                            duration: .001,
                            ease: "none"
                        }), c.to(e, {
                            scale: 1.5,
                            y: "75%",
                            rotateZ: 15,
                            duration: 1,
                            ease: customEaseC
                        }), c.to(e, {
                            scale: 1,
                            y: "-100%",
                            rotateZ: 0,
                            duration: .001,
                            ease: "linear"
                        })), t == o && (e.classList.add("selected"), l.to(e, {
                            zIndex: 10,
                            scale: 1.35,
                            duration: .001,
                            ease: "none"
                        }), l.to(e, {
                            y: 0,
                            scale: 1,
                            duration: 1,
                            ease: customEaseC
                        }))
                    }))
                }(),
                function(e) {
                    if (u.isActive()) return;
                    if (d.isActive()) return;
                    u.clear(), d.clear(), a += 2, a > r - 1 && (a = 1), document.querySelectorAll(".pg-right [data-list]").forEach((e => {
                        let t = e.dataset.list;
                        e.classList.contains("selected") && (e.classList.remove("selected"), u.to(e, {
                            zIndex: 1,
                            duration: .001,
                            ease: "none"
                        }), u.to(e, {
                            scale: 1.5,
                            y: "75%",
                            rotateZ: 15,
                            delay: .05,
                            duration: 1,
                            ease: customEaseC
                        }), u.to(e, {
                            scale: 1,
                            y: "-100%",
                            rotateZ: 0,
                            duration: .001,
                            ease: "linear"
                        })), t == a && (e.classList.add("selected"), d.to(e, {
                            zIndex: 10,
                            scale: 1.35,
                            duration: .001,
                            ease: "none"
                        }), d.to(e, {
                            y: 0,
                            scale: 1,
                            delay: .05,
                            duration: 1,
                            ease: customEaseC
                        }))
                    }))
                }()
            }))
        }
        if (document.querySelector("#intake-form")) {
            let e = gsap.timeline({
                paused: !0
            });
            document.querySelector("#resetForm").addEventListener("click", (function() {
                e.reverse()
            })), gsap.set("#success-message", {
                y: -100
            }), e.to("#i-form", {
                opacity: 0,
                y: 100,
                pointerEvents: "none",
                duration: 1,
                ease: "expo.inOut"
            }), e.to("#success-message", {
                opacity: 1,
                y: 0,
                pointerEvents: "auto",
                duration: 1,
                ease: "expo.inOut"
            }, "-=.95");
            const t = document.getElementById("intake-form"),
                o = document.getElementById("submit");
            o.addEventListener("click", (function(a) {
                if (a.preventDefault(), t.checkValidity()) {
                    o.disabled = !0, o.style.backgroundColor = "#D62E49", o.value = "Sending...";
                    var s = new FormData(t);
                    for (let e = 1; e <= 3; e++) {
                        var i = document.querySelector('span[data-flip-id="auto-' + e + '"]');
                        s.append("span-" + e, i.textContent)
                    }
                    fetch("submission.php", {
                        method: "POST",
                        body: s
                    }).then((e => e.text())).then((a => {
                        console.log(a), o.style.backgroundColor = "#D62E49", o.value = "Submit", o.disabled = !1, e.play(), t.reset()
                    })).catch((e => {
                        console.error("Error:", e)
                    }))
                } else t.reportValidity()
            }))
        }
    }
};
const changeTheme = function() {
    themeTag = document.querySelector(".content"), thisData = themeTag.dataset.work, bodyTag.className = "", bodyTag.classList.add(thisData)
};
changeTheme();
const glIn = function() {
        bodyTag.classList.contains("init") && !isMobile() && (MainThreeScene.start(), gsap.set(glContainer, {
            y: e => "+=" + -1 * e.offsetHeight,
            zIndex: 10
        })), bodyTag.classList.contains("init") || bodyTag.classList.contains("root") || bodyTag.classList.contains("default") || isMobile() || (MainThreeScene.start(), gsap.set(glContainer, {
            y: e => "+=" + -1 * e.offsetHeight,
            zIndex: 2
        }))
    },
    glOut = function() {
        bodyTag.classList.contains("init") && !isMobile() && (MainThreeScene.pause(), gsap.set(glContainer, {
            y: e => "+=" + -1 * e.offsetHeight,
            zIndex: 2
        })), bodyTag.classList.contains("init") || bodyTag.classList.contains("root") || bodyTag.classList.contains("default") || isMobile() || (MainThreeScene.pause(), gsap.set(glContainer, {
            y: e => "+=" + -1 * e.offsetHeight,
            zIndex: 10
        }))
    },
    glScroll = gsap.timeline({
        scrollTrigger: {
            id: "projectDetail",
            trigger: ".content",
            start: "top top",
            end: () => "+=" + .9 * window.innerHeight,
            scrub: !isMobile(),
            toggleActions: "play pause play none",
            onEnterBack: glIn,
            onLeave: glOut,
            onRefresh: e => e.progress && e.animation.progress(1)
        }
    });
isMobile() ? glScroll.to("#webglBubble", {
    y: "0",
    duration: .35,
    ease: "linear"
}) : glScroll.to("#webglBubble", {
    y: () => "+=" + -1 * window.innerHeight,
    duration: .35,
    ease: "linear"
});
let gl = ScrollTrigger.getById("projectDetail");
const updateGl = function() {
    let e = document.querySelector("#webglBubble canvas");
    bodyTag.classList.contains("root") ? (MainThreeScene.pause(), gl.disable()) : (gsap.to(glContainer, {
        zIndex: 2,
        opacity: 1,
        scale: .7,
        xPercent: 0,
        yPercent: 0,
        y: "0%",
        duration: .75,
        ease: "power4.inOut"
    }), MainThreeScene.start(), gl.enable()), bodyTag.classList.contains("default") && gsap.to(glContainer, {
        zIndex: 999,
        opacity: 1,
        scale: .7,
        xPercent: 0,
        yPercent: 0,
        y: "0%",
        x: 0,
        duration: .75,
        ease: "power4.inOut"
    }), bodyTag.classList.contains("init") && gsap.to(glContainer, {
        zIndex: 10,
        opacity: 1,
        scale: .7,
        xPercent: -20,
        yPercent: 17,
        y: "0%",
        x: 0,
        duration: .75,
        ease: "power4.inOut"
    }), bodyTag.classList.contains("init") || bodyTag.classList.contains("default") || bodyTag.classList.contains("root") || isMobile() || gsap.to(glContainer, {
        zIndex: 2,
        opacity: 1,
        scale: .9,
        xPercent: 0,
        yPercent: 0,
        y: "0%",
        duration: .75,
        ease: "power4.inOut"
    }), bodyTag.classList.contains("init") || bodyTag.classList.contains("default") || bodyTag.classList.contains("root") || !isMobile() || (gsap.to(glContainer, {
        zIndex: 2,
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        y: "0vh",
        duration: .75,
        ease: "power4.inOut"
    }), gsap.to(e, {
        y: "10vh"
    })), bodyTag.classList.contains("init") && isMobile() && (gsap.to(glContainer, {
        zIndex: 2,
        opacity: 1,
        scale: 1,
        xPercent: 0,
        yPercent: 0,
        y: "0vh",
        duration: .75,
        ease: "power4.inOut"
    }), gl.enable(), gsap.to(e, {
        y: "0vh"
    }), MainThreeScene.start()), bodyTag.classList.contains("default") && isMobile() && (gsap.to(glContainer, {
        zIndex: 999,
        opacity: 1,
        scale: 1,
        opacity: 1,
        xPercent: 0,
        yPercent: 0,
        y: "0vh",
        duration: .75,
        ease: "power4.inOut"
    }), gl.disable(), gsap.to(e, {
        y: "0vh"
    }), MainThreeScene.start())
};
updateGl();
const changeTexture = function() {
    bodyTag.classList.contains("default") && (MainThreeScene.changeTexture(0, !1), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 1909061
        }
    })), bodyTag.classList.contains("ssi") && (MainThreeScene.changeTexture(0), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 16777215
        }
    })), bodyTag.classList.contains("op") && (MainThreeScene.changeTexture(1), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 6841187
        }
    })), bodyTag.classList.contains("va") && (MainThreeScene.changeTexture(2), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15592674
        }
    })), bodyTag.classList.contains("hy") && (MainThreeScene.changeTexture(3), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15592674
        }
    })), bodyTag.classList.contains("oa") && (MainThreeScene.changeTexture(4), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15462387
        }
    })), bodyTag.classList.contains("be") && (MainThreeScene.changeTexture(5), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 6254957
        }
    })), bodyTag.classList.contains("hp") && (MainThreeScene.changeTexture(6), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15658473
        }
    })), bodyTag.classList.contains("ho") && (MainThreeScene.changeTexture(7), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15463134
        }
    })), bodyTag.classList.contains("md") && (MainThreeScene.changeTexture(8), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 15660799
        }
    })), bodyTag.classList.contains("init") && (MainThreeScene.changeTexture(9, !1), MainThreeScene.setParams({
        mainBall: {
            reflectionColor: 3554679
        }
    }))
};
changeTexture();
const startScripts = function() {
    PageInits.lazyLoad(), PageInits.mainScripts()
};
let introAnim = gsap.timeline({
    paused: !0
});
const introBg = document.querySelector("#loading-overlay"),
    introPaths = gsap.utils.toArray("#loading-overlay svg .pathAnim"),
    introSVG = document.querySelector("#loading-overlay svg"),
    introSpan = document.querySelector("#loading-overlay span");

function introLoading() {
    isMobile() || smoother.paused(!0), introAnim.play()
}

function newsletter() {
    document.body.addEventListener("click", (function(e) {
        if (e.target && "nl-submit" === e.target.id) {
            e.preventDefault();
            const s = document.querySelector("#newsletter form");
            if (!s.checkValidity()) return void s.reportValidity();
            var t = document.querySelector("#newsletter input[type=email]");
            if (!t) return;
            var o = t.value,
                a = new FormData;
            a.append("mail", o), fetch("submission.php", {
                method: "POST",
                body: a
            }).then((e => e.text())).then((o => {
                document.querySelector("#newsletter input[type=email]").value = "Wonderful! Check your inbox!";
                var a = document.querySelector(".arrow-link");
                e.target.disabled = !0, t.readOnly = !0, a.innerHTML = '<svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.5C1.8 9.3 8.33333 15.8333 11.5 19C18.5294 11.9706 22.4706 8.02944 29.5 1" stroke="#EEEEF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
            })).catch((e => {
                console.error("Error:", e)
            }))
        }
    }))
}
introAnim.set(introPaths, {
    drawSVG: "0% 0%"
}), introAnim.set(introSVG, {
    opacity: 0
}), introAnim.set(introBg, {
    opacity: 1
}), introAnim.set(introBg, {
    opacity: 1
}), introAnim.set(["#logo", "#usp", "#fixed-cta", "#hamburger"], {
    opacity: 0
}), introAnim.to(introBg, {
    opacity: 1,
    duration: .6,
    ease: "power4"
}), introAnim.to(introSVG, {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: "power4"
}, "-=.2"), introAnim.to(introSpan, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4"
}, "-=.6"), introAnim.to(introPaths, {
    drawSVG: "0 100%",
    duration: 1,
    stagger: {
        amount: .6
    },
    ease: "power4"
}, "-=.5"), introAnim.to(introPaths, {
    drawSVG: "100% 100%",
    stagger: {
        amount: .2
    },
    duration: 1,
    ease: "power4.inOut"
}), introAnim.to(introSVG, {
    opacity: 0,
    scale: .9,
    duration: .6,
    ease: "power4"
}, "-=.5"), introAnim.to(introSpan, {
    opacity: 0,
    y: "-100%",
    duration: .6,
    ease: "power4"
}, "<"), introAnim.to(introBg, {
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    y: 10,
    x: 10,
    borderRadius: 30,
    duration: .6,
    ease: "power4.inOut"
}), introAnim.to(introBg, {
    opacity: 0,
    duration: 1,
    pointerEvents: "none",
    ease: "power4.inOut",
    onStart: startScripts,
    onComplete: () => {
        isMobile() || smoother.paused(!1), introBg.remove()
    }
}, "-=.5"), introAnim.to(["#logo", "#usp", "#hamburger", "#fixed-cta"], {
    opacity: 1,
    delay: .6,
    duration: .6,
    stagger: .1,
    ease: "power4.inOut"
}), bodyTag.classList.contains("init") ? introLoading() : startScripts(), newsletter(), $(".nav-link").click((function(e) {
    e.preventDefault();
    var t = $("#smooth-wrapper").smoothState().data("smoothState"),
        o = $(this).attr("href");
    t.load(o)
})), $((function() {
    "use strict";
    var e = {
            prefetch: !1,
            cacheLength: 2,
            onStart: {
                duration: 1300,
                render: function(e) {
                    if (e.addClass("is-exiting"), t.restartCSSAnimations(), isMobile() || setTimeout((function() {
                            smoother.kill()
                        }), 300), hamburger.classList.contains("active") ? (hambIcon.reverse(), menuBgAnim.reverse().delay(.1), menuInner.reverse(), hamburger.classList.remove("active"), gsap.to(".page-to-page svg:first-of-type", {
                            opacity: 1,
                            duration: .5,
                            delay: 1
                        })) : pageMaster.restart().timeScale(1.2), document.querySelector(".home") && !isMobile()) {
                        let e = ScrollTrigger.getById("attScroll"),
                            t = ScrollTrigger.getById("clientPin");
                        e.kill(), t.kill()
                    }
                    if (document.querySelector(".about") && !isMobile()) {
                        ScrollTrigger.getById("timelineScroll").kill()
                    }
                    bodyTag.classList.contains("init") && gsap.to(glContainer, {
                        xPercent: 0,
                        yPercent: 0,
                        y: "0%",
                        duration: .75,
                        ease: "power4.inOut"
                    })
                }
            },
            onReady: {
                render: function(e, t) {
                    e.removeClass("is-exiting pending"), e.addClass("is-animating"), e.html(t), bodyTag.classList.remove(thisClass), bodyTag.classList.contains("init") && gsap.to(glContainer, {
                        y: "0%",
                        duration: 1,
                        ease: customEaseC
                    })
                }
            },
            onAfter: function(e, t) {
                if (e.removeClass("is-animating"), document.querySelector(".work") && isMobile()) {
                    const e = () => {
                        document.querySelector("body").style.minHeight = window.innerHeight + "px", document.querySelector("#smooth-wrapper").style.minHeight = window.innerHeight + "px", document.querySelector(".content.work").style.height = window.innerHeight + "px"
                    };
                    window.matchMedia("(max-width: 1024px)").matches && (window.addEventListener("resize", e), e())
                } else document.querySelector("body").style.minHeight = "auto";
                if (document.querySelector(".about") && !isMobile()) triggerDotAnim();
                else {
                    let e = new SplitText(".about #hero h1", {
                        type: "lines, chars"
                    });
                    gsap.set(".about #hero h1", {
                        perspective: 400
                    }), gsap.set(e.chars, {
                        transformOrigin: "0% 100%",
                        scale: 6,
                        opacity: 0,
                        rotate: 45,
                        y: window.innerHeight
                    }), gsap.to(e.chars, {
                        transformOrigin: "0% 100%",
                        scale: 1,
                        opacity: 1,
                        rotate: 0,
                        duration: 1,
                        delay: .8,
                        stagger: {
                            amount: .3
                        },
                        y: 0,
                        ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
                    })
                }
                logo.classList.remove("active"), smoothScroll(), PageInits.lazyLoad(), PageInits.mainScripts(), setTimeout((function() {
                    ScrollTrigger.refresh()
                }), 1e3), pageMaster.reverse().timeScale(-99);
                gsap.utils.toArray(".scroll-to").forEach((e => {
                    const t = e.dataset.scroll;
                    e.addEventListener("click", (function() {
                        smoother.scrollTo("." + t, !0, "top 20%")
                    }))
                })), contentTag.style.pointerEvents = "auto", changeTheme(), bodyTag.classList.contains("default") || bodyTag.classList.contains("init") || bodyTag.classList.contains("root") ? (updateGl(), changeTexture(), gsap.to(".blur-circle", {
                    scale: 1,
                    opacity: .3,
                    delay: .35,
                    duration: 1,
                    ease: "power4.inOut"
                })) : setTimeout((function() {
                    updateGl(), changeTexture()
                }), 600)
            }
        },
        t = $("#smooth-wrapper").smoothState(e).data("smoothState")
}));