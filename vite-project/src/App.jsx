import { useState } from 'react'
import './styles/styles.css'

const images = [
  'data:image/jpeg;base64,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', 
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALEAsQMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEAQAAICAQIDBQMICAQHAAAAAAECAAMEBRESITEGE0FRcWGBkSIyM0JSocHRFCMkU2KCseEHNEPwJXJzkpOUov/EABsBAQACAwEBAAAAAAAAAAAAAAADBAECBQYH/8QALxEBAAICAQIEBAQHAQAAAAAAAAECAxEEITEFEkFREzJhoSJxkbEUFSNCUoHhM//aAAwDAQACEQMRAD8A+vzxqcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4zqvzmA9TtNorae0M6lqOXjA7HIqH8wm8Ycs/2z+jb4d/ZkuRQ3zbqz6MJicWSO9Z/SWPJb2bAdxyMj6sakhggICAgQsjVsHGza8O/JRMizbhQg+PTc9B75JGO8x5ojolrgyWrN6x0hNkaIgICAgICAgICBhbYlSF7GCqPEnabVpa86rG20Vm06hX2anZaeHDoZh+8s5L+c6eHwu1uuSdfSFivHiPnlpZMq7/MZbAfYqHCJ1MXBwU9NpIile0PBg4w5mvjPm7EyzFKx2beeWYxccD6Cv8A7RNtQee3u8bDxm60Vn+URqDz293n6Gin9U9tR80cyO+DHf5oY82+/Vmt+fT1dMhB9ocLfdKGbwvFb5OktJx47duiVjajTcwrfeq77FnIn0PQzlZ+Flw9dbj3Q3w2r9YTJTQkBA4jNxatQ7TLYxbcZCjkduSn+06lY+Hh/wBPQVj4fE6+0/d285fq8+QEBAQEBAQECHm5y45Fda95e3zUHh7TLnF4d8877QmxYpv19EIUNc/e5r97YOi/UX0E9Dh4+PDGqwtRMVjVUgCTtSAgICAgIEXPuxUrC5RX5XJRtuSfYBzkWbNjxRu8t8db2+Vqw8/Mrbhqxb7qPqm4hCPefD1nn+Xfj5J3jiYlm/HpbvOp+iWc/PPzcKhf+a8/gJS1CL+Gxetp/Ri+o56KzviY/Co3O1x6fCZrWu+rMcbFM6i0/o5/Sr2TUFyO6suK7sVTbf7/AFl/PaPh6h1uXT+h5N69HU4mq4uVaKVL13bfR2oVb3ec52nDycbJjjzT1j3hOmFcgICAgICBC1HNOPw1UgNkWfNHkPMy7w+JOe25+VPixefrPZFxscUgkkvY3N7D1JnpaUitdQsTbf5N02YICZCAmAgICBRjM/4tkWMAwT9Uo8QB1I9887z7/EzzE+nRamn9KI/2sFzqCebFfUSh5ZReSW0ZVB6Wr8Y1LGpacu2u3HtrS5AzrsNzNq9JiZbU/DaJlXaWiYVjvfYjErsAvOTZr+fpC1yssZYiKw91PN4q1sqHC1LB0YnY7g7yHWkWGu7eWe0uros72pLANg6g7SL1ci1fLMwzhqQEBAQNWVemNjtc/wA1R8T4CSYcVst4pVvSs3tqFXi1vu19/O+7mf4R5T1mHFGKkVhctqPwx2htpuqvQtTaligkEowIBHIjlJZjTWJiWcwyQKzX8jLqxKcfTLKq8/MvTHoe4bqhPMsR47KGO3ntN6xG+qLLeaV3DPSGza0vwtVuqvzsR+C22peFbAQGVgPDkwHqDMW13jsxhvN69VhNUxAQECuy9OxsnMTvEKl1J4k5Ekbf3kOTh4c0btHUnk5McxEdlDYj1OyJc/yWI585zreHU30tP2bRzvesPA9w6WA+qyP+Wz/l9v8Arb+Nx/4/f/jxrrlHz1+E0vwZp3snwZaZpmNaeCy5k52kD2ATbHwItG5s1z564cnkiu3R4WlYqPp1liNZc4LubGJHzfL1Ik3I4eHBxrXr3c+/OzXny71H0dB05TgoCAgICAgVWpN+kZ1WN/p1DvH9fCdvwrD0nJK3gjVZt7q/tTlWYPZvU8mn6SvGcrsdue3KdzHXzWiGM1vLjmVN2Q1TQr9TyMLs3htiYoxK7XrKcI7wEqx28TsV3PjtJMmO9Y/ErcW+5mrrZAukDif8U3tr0rAeixq3TK4ldDsVYKSCDLPGiJtMSpcy0xSEf/CzJvyW1e3KusvutsSx7bCSWO23X0AmeTSI1prwrbi0O+lVfICAgaL/AJORjN4cZHxUzenqgzdolz2evBm5C+HeH+sr2+aUTQoJYKo3Y8gJHaYrWbW7QR1llqFBx7Au+4Yb7nznK4vPrzMfmiNa9P2+3d1uJj8m2tR8ge2dWkarDn8i3myy7Otds7Fr/d4u/wASB+Er+K21xte8x9oUqfNKfPOQlICAgICNbFLhk3WX5LdbbDt6DkJ63jY/h4oqv2jURX2RO1GO2V2d1ChDszUNsZcwf+lfzQciN4rR9HHf4bac+LrOVa7b/s23L2sv5S7zKTWkbUODO7z+T6LOa6pMih7a4i5WiEsgYVWK53HTw/GW+DMfF1Pqqc2N4tonYHEWjEybEQKr2ADYddh/eS+Iai8VhFwI/DMupnOdAgICBHzOSVueiWqfv2/Gb07oc3yqfUKlbVbVd+AHbY+4Tnc7Nkw0tfHTzTH19EdKxadTOm6jCrpcPuzMOm88dy/HM3Jxzi8sVif1XceCKztsysdMisK+4IPIjrKHE5l+LbzU9e+1mszEoV2HXUyKthLOwVV989d4X4jm5k9ceqx67c7Pjiu531dVXs2q5J+xWiD7zLXjE6pSv1lSx+qVOCkICAgIGrLfu8W5/soT90kwxvJWPrH7t8cbvEKvT14cOkfwgn3z19Y6Lt/mlvZQ6lWG6sNiPMTaJ1O2lo3GlXoeirpPfnj7xrWGzbbbKN9h98s8nkTm1Hsr8fBGHc+6wyMmjGHFkXV1r5s20qTMR3larW1ulY2jV6xp9tyU15dTWOdgFO+5mPiVnptJODJEbmqVkCs0Wd+AauE8YI5bTeLeWdwi8vn/AA+6mq1JMapacPGWulfmgmR3z2vabSu4uBWlYrtY6dnDLVwy8LpzO3SZpfzIeRh+FMe0pk2QEBAi5tq91ZUdw/DxLv0bbym1Z1ZpkrM0mVRrX+d4vBkUyLJ0sqx1hIwC7Yyljv5b+U+f+N0x15lopGvf83SwTM06pHIjkd5ypr5Z1Kadq3DDW6vQH5t34+AM+mcWlK46RjjUajTkZZnc7dThfKvzLPO7h9wAnP8AGbf1aV9o/eZQ4+yXOOkICAgIEfUF4sHIA8am/pJuP/7V/OP3b4vnj80HDO+JSR4oP6T10Lt/mlA1i3JUqlPEKyObJ138pHk83os8WuOetu7RpNWWchH3da/rcW/OYp5tpeTbFFNerHX9KTKvrzCpYIvCyDptvvMZab6ouLm8v4EfS9LpfLrtShVFTB+IeY6TXHSJttNnzTFdb7ukdQ6MrDdSNiPZLDnROp2rzo+Oz7hnAPhvNPh1Wo5mSI7JmNjVYycNK7b9T4mbxER2QXyWyTuzbDQgIGvIpryENdnj0gidOb1uy2l6xavEVXh4ugI8JHfrKHNjiv4o7I7ag/6NWikqpXov5znT4fgjLbPau7T7+hjva01pDHDyLK3JqcjluVPjIrcTDyumWN/v+rqc23w6RMe6d2evOVrtRKbbFn5ehnR4+L4Va0iezhZLeaJl1Wl88Zn/AHljt/8ARnG8VtvlT9IiGuP5Uuc1uQEBAQMbV46nT7SkTas6tEsxOpU+nHfEQfZ3U+6ewpO67X7/ADbSZu1JgICAgICAgICAgVWv44txQ/Uqdj7/AO81vHq2rHmiay5cqVsFZAb5XhI5jcaUq2nHaJj0EZq3ZgnNeW3lNKY4qm5HJtmmN+i47Mu/6X37KAqK3MDryk2ON2Vrday63TV4cCgH7AM8zzrefk3t9WK9kmVGSAgICAgU4Ax8/JpPIOe9Ty59fvnp/D8vxMMfReifPSJZVO1rcY5V9F/i9vpLrM9G2GCAgICAgICAgIEbUVDYV3hsu8xbs3x/NCNSneU1s+n1v8gfKDAb8us3rFdQp5KX889GwUKNuDT0BHmRtM6q18l/Z6VuyMmrG2SkMCTwcyBtsZX5XIjj4/PrbM47RSZleVoK0VB0UATyVrTa02n1RspqEBAQEBAq9WrS7Jx0G/eLuWIP1PL4zseE1tM2n0W+PMxE+zMAAbAbCdxuQEBAQEBAQEBAQNGeQMK4n7BmLdm1Pmhlirw41KnwrUfdMx2Yt80tvKGGOmr32XkZB6LtUnu5mcTxbL1rjR551WKrOcZVICAgICAgVCt3ubl2HqH7tfQD856jw+kUwR9eq9Eax1j/AG3S4EBAQEBAQEBAQECHqZ4qFpHW1wv5zFu2m+PvtLUbKPTaZaNWTaUVUqHFdYdkX2+c0yZIx180sx7z6LHEoGNjrUDxbDct5nxM8nnyzlyTf3U72m9tt0iaEBAQEBAf73gUmM3Bk5dTDZxaW2PiDPV8SYnDXXs6HelZSpaakwNV19VW3EwLeCjmYmYhmKzLwG23qpRPLf5R/KDpDd5bffDBAQEBAQBgQqNsrNa8/RVDhr9p8TMR1nbe34a692+y/ZxVWpsuPSteo9fKaZctMUbvLXXTc9IS8LDNTG7IYPe3IkdFHkJ53mcyeROo7K2XL5uleyZKKEgICAgICAgQs3T1ybBdXYarwNuIdD6iXeLzb4I13hPizTSNT1hp/QM3xzKv/F/eXv5vH+P3/wCJPj0/x+7w6awBfKznKgbttsg2kV/FclulIY/iPStXNntDp2PqDV6f3t1H17SBw7+xupnQ42XJ5f6sL9OLmvT8cL3Fz8fJXetxufCXa2iVe+O1J6pRmWhAQEBA8ZlReJmAHmYI69lTqeqVCtqqWJY8iw8vZNZnfSE+LFMzuVbbrN6Ud3SorRV5bTHVYjBXe5dN2aHFoeFeQveXULY7AdSRv+M8xzb2tmtEz2cnkTPxJj2WkqoCAgICAgICAgIAwPnfbDWX1TNs0+hiMHHbgt2P01g6g+wdPWdnh8fyVi9u8/Z3fD+L5a/EtHWVLtsAJcdVlXa9RJR2Xz5zMTpratbRqYWWLrubjgDj4lHgSZJGS0K1+Fjt26LGrtUf9Smb/GV54E+kpI7UUHrSfifymfjQ0/gMjB+1VX1aTHxoZjgX90S7tRe3Kmvbyms5p9EtfD49ZV2NqWdqKsTRk3txsB3NLMOR85j4laxu8xH+2tq4sc62m06TrGUf1emmoH6+RYFHwkNufx6/3b/JHblYq+u1tg9j2YhtWyu9X9xQOFfeep+6UM3ilp6Y419VPJz57Uh1VVSU1JVUoWtFCqo6ADoJy7Wm0zMqEzMzuWU1YICAgICAgICAgIHynVtIzNDyLUyKbLMQuzV5KISvCT0bboZ3sOemSsder0vF5ePJSI31REtrsG9diN6GWJjS6zmGD2wyQPCyr84qPUwx0aXy8deXej+U7/0mdSxuEzT9O1bVSBgYFq1E/T3gonu36+7eQ5c+LH0mVbNzMWPvP6Po3ZvSzo2j04LW96ylmd9tgWYknb2c5xuRl+Lk8+tPP8jN8bJN9LOQoCYCAgICAgICAgICAgID/e0zvQrMvs/pGYxbJ07Gdj9buwD8RJa8jLXtaU9ORlp8tpV79h9BYkjGuQ/wZNgHw32k0c/PHr9oTR4hyI9ftDUeweiHn+2f+y0z/H5vp+jb+Y5/p+j0dg9C+umU48jkv+Bj+YZ/TX6MfzHke/2SKexnZ6n5unI//Vdn/qTNZ5uef7mk87kT/cs8bStPxR+z4OPWR9msCQWy3t80oLZclvmlM8ZojJgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgf/9k=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRc8ATxAXWF5HJqoZlxznLlbwHm4tlT-kdXQ&usqp=CAU'


]

function App() {
  const [current, setCurrent] = useState(0)

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1: current - 1)
  }
  return (
    <div>
      <h1>KIRBY ASS</h1>
      <div className='carousel'>
      <div className='leftArrow' onClick={prevSlide}>⬅</div>
      {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      <div className='rightArrow' onClick={nextSlide}>⮕</div>
    </div>
    </div>
  )
}

export default App
