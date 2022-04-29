const animationElements = Array.from(document.querySelectorAll('.animation'))
const buttonModeColor = document.querySelector(
  '.wrapper__header_container_modeColor'
)
const headerList = Array.from(
  document.querySelectorAll('.wrapper__header_container-list_element')
)
const blockParalax = document.querySelector('body')
const day = document.querySelector('.day')
const headerBackdrop = document.querySelector('.wrapper__header_backdrop')
const wrapperBackdrop = document.querySelector('.wrapper__content_backdrop')
const anchorTop = document.querySelector('.anchor_top')
const body = document.querySelector('body')
const bodyBackdrop = document.querySelector('.body_backdrop')
const wrapperReviews = Array.from(
  document.querySelectorAll('.wrapper__content_review')
)
const clouds = document.querySelector('.paralax__image_clouds')
const mountains = document.querySelector('.paralax__image_mountains')
const human = document.querySelector('.paralax__image_human')
const reviewTexts = Array.from(document.querySelectorAll('.review_text'))
let bodyMode = true
let outerWidthWindow = 0
let dayBool = true
let rePosDay = true

const chekedScrollWindowForHeader = () => {
  if (pageYOffset >= window.innerHeight / 6) {
    headerBackdrop.style.height = '125px'
  }
  if (pageYOffset < window.innerHeight / 6) {
    headerBackdrop.style = ''
  }
}
const chekedScrollWindowForAnimation = () => {
  const offset = (el) => {
    const rect = el.getBoundingClientRect()
    const scrollTop = pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop }
  }
  animationElements.forEach((elem) => {
    const elemHeight = elem.clientHeight
    const elemOffset = offset(elem).top
    const elemStart = 4
    let animElemPoint = innerHeight - elemHeight / elemStart
    if (elemHeight > innerHeight) {
      animElemPoint = innerHeight - innerHeight / elemStart
    }
    if (
      pageYOffset > elemOffset - animElemPoint &&
      pageYOffset < elemOffset + elemHeight
    ) {
      elem.classList.add('active')
    } else if (!elem.classList.contains('image_animation')) {
      elem.classList.remove('active')
    }
  })
}
setTimeout(() => {
  chekedScrollWindowForAnimation()
}, 300)
setTimeout(() => {
  const logo = document.querySelector('.wrapper__header_container-logo')
  const elemParalaxs = [mountains, clouds, human]
  const setStyles = () => {
    logo.style.marginTop = '0%'
    logo.style.opacity = '1'
    setTimeout(() => {
      elemParalaxs.forEach((elem, i) => {
        setTimeout(() => {
          if (elem.classList.contains('paralax__image_clouds')) {
            elem.style.opacity = '1'
          }
          if (elem.classList.contains('paralax__image_mountains')) {
            elem.style.opacity = '1'
            elem.style.top = '5%'
          }
          if (elem.classList.contains('paralax__image_human')) {
            elem.style.left = '0%'
            elem.style.opacity = '1'
          }
        }, i * 100)
      })
    }, 200)
    setTimeout(() => {
      day.style.top = '1%'
    }, 500)
    setTimeout(() => {
      headerList.forEach((elem, i) => {
        setTimeout(() => {
          elem.style.marginTop = '0%'
          elem.style.opacity = '1'
        }, i * 100)
      })
    }, 800)
    setTimeout(() => {
      buttonModeColor.style.marginTop = '0%'
      buttonModeColor.style.opacity = '1'
    }, 1200)
    requestAnimationFrame(setStyles)
  }
  setStyles()
  outerWidthWindow = window.innerWidth
}, 10)
window.addEventListener('resize', () => {
  outerWidthWindow = window.innerWidth
})
window.addEventListener('scroll', (event) => {
  if (bodyMode) {
    if (pageYOffset >= 6) {
      wrapperBackdrop.style.boxShadow =
        '0 -45px 25px 20px rgba(255, 255, 255, 0.797)'
    }
    if (pageYOffset < 6) {
      wrapperBackdrop.style.boxShadow = '0 0 0 0 rgba(255, 255, 255, 0.797)'
    }
  } else {
    if (pageYOffset >= 6) {
      wrapperBackdrop.style.boxShadow = '0 -45px 25px 20px rgba(0, 0, 0, 0.797)'
    }
    if (pageYOffset < 6) {
      wrapperBackdrop.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0.797)'
    }
  }
  // chekedScrollWindowForHeader()
  chekedScrollWindowForAnimation()
})
window.addEventListener('mousemove', () => {
  if (outerWidthWindow >= 1024) {
    blockParalax.addEventListener('mousemove', (e) => {
      const clouds = document.querySelector('.paralax__image_clouds')
      const mountains = document.querySelector('.paralax__image_mountains')
      const human = document.querySelector('.paralax__image_human')

      const forClouds = 20
      const forMountains = 10
      const forHuman = 5
      const forDay = 40
      const speed = 0.8

      let croodX = 0
      let croodY = 0

      const offsetHeight = blockParalax.offsetHeight
      const offsetWidth = blockParalax.offsetWidth
      const mouseX = e.clientX
      const mouseY = e.clientY
      const crooX = mouseX - offsetWidth / 2
      const crooY = mouseY - offsetHeight / 2
      croodX = (crooX / offsetWidth) * 100
      croodY = (crooY / offsetHeight) * 100

      const distX = (croodX / 2) * speed
      const distY = (croodY / 2) * speed

      const setStyle = () => {
        clouds.style.transform = `translate(${distX / forClouds}%,${
          distY / forClouds
        }%)`
        mountains.style.transform = `translate(${distX / forMountains}%,${
          distY / forMountains
        }%)`
        human.style.transform = `translate(${distX / forHuman}%,${
          distY / forHuman
        }%)`
        console.log((distY / 10) * forDay + 300)
        day.style.transform = `translate(${(distX * forDay) / 3}%,${
          (distY / 10) * forDay + 150
        }%)`
      }
      requestAnimationFrame(setStyle)
    })
  } else {
  }
})
buttonModeColor.addEventListener('click', () => {
  if (bodyMode) {
    bodyBackdrop.style.opacity = '1'
    headerList.forEach((elem) => {
      elem.style.color = 'white'
    })
    wrapperBackdrop.style.backgroundColor = 'black'
    wrapperReviews.forEach((elem) => {
      elem.style.backgroundColor = 'white'
    })
    reviewTexts.forEach((elem) => {
      elem.style.color = 'black'
    })
    if (pageYOffset >= 6) {
      wrapperBackdrop.style.boxShadow = '0 -45px 25px 20px rgba(0, 0, 0, 0.797)'
    }
    if (pageYOffset < 6) {
      wrapperBackdrop.style.boxShadow = '0 0 0 0 rgba(0, 0, 0, 0.797)'
    }
    day.src = './img/luna.png'
    day.classList.remove('day_sun')
    day.classList.add('day_luna')
    buttonModeColor.classList.add('active')
    buttonModeColor.innerHTML = '<span>Темная тема</span>'
  } else {
    bodyBackdrop.style.opacity = '0'
    headerList.forEach((elem) => {
      elem.style.color = 'rgb(217, 217, 217)'
    })
    wrapperBackdrop.style.backgroundColor = 'white'
    wrapperReviews.forEach((elem) => {
      elem.style.backgroundColor = 'black'
    })
    reviewTexts.forEach((elem) => {
      elem.style.color = 'white'
    })
    if (pageYOffset >= 6) {
      wrapperBackdrop.style.boxShadow =
        '0 -45px 25px 20px rgba(255, 255, 255, 0.797)'
    }
    if (pageYOffset < 6) {
      wrapperBackdrop.style.boxShadow = '0 0 0 0 rgba(255, 255, 255, 0.797)'
    }
    day.src = './img/sun.png'
    day.classList.remove('day_luna')
    day.classList.add('day_sun')
    buttonModeColor.classList.remove('active')
    buttonModeColor.innerHTML = '<span>Светлая тема</span>'
  }
  bodyMode = !bodyMode
})
anchorTop.addEventListener('click', () => {
  anchorTop.style.transform = 'rotate(160deg)'
  setTimeout(() => {
    anchorTop.style.transform = 'rotate(100deg)'
  }, 200)
  setTimeout(() => {
    anchorTop.style.transform = 'rotate(150deg)'
  }, 400)
  setTimeout(() => {
    anchorTop.style.transform = 'rotate(100deg)'
  }, 600)
  setTimeout(() => {
    anchorTop.style.transform = 'rotate(135deg)'
  }, 800)
  setTimeout(() => {
    anchorTop.style.marginTop = '60px'
    headerBackdrop.style.height = '200px'
  }, 1000)
  setTimeout(() => {
    headerBackdrop.style.height = '125px'
    anchorTop.style.marginTop = ''
  }, 1200)
  setTimeout(() => {
    if (pageYOffset >= 133) {
      console.log('Больше 133')
      headerBackdrop.style.height = '125px'
    }
    if (pageYOffset < 133) {
      console.log('Меньше 133')
      headerBackdrop.style.height = ''
    }
    window.scrollTo({
      top: body.clientHeight,
      behavior: 'smooth',
    })
  }, 1500)
})
