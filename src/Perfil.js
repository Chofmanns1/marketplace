import React from 'react'
import './Perfil.css'

function Perfil() {
    return (
        <div className='perfil'>
            <div className='perfil__image'>
                <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXEzeH///+/yd/j5/DS2ej3+Pva4OzJ0eTW3OrM1OXy9Pjs7/Xk6PH7/P3o6/Pc4e01OR2yAAADhElEQVR4nO3dCZqrIBAEYNNxy+r9b/s0eVkmY5LuVmzKqf8E1AcCAmJREBERERERERERERERERERERERERERERERERERERERERERERERERERERnIYNe2pUSXJAWRoj7uT5uL7doi9hVXn/+HG5xXFbBP1+03P9QrCtjHe667q3Y9AaU5/orXW01AKfcj8XrNOiJKWY3nW0lPKs37fL0Kvhpl+ynfALs7/VKBVwfgiFJ+zze01OhyukmtCtjbRRfVRx+wj4jYUqXVB8SsxcYSsB/8o8trJmOztE+iC2wlnTHgZo/2KFoDbjYdVMTvU5kR0YU2EcVc5pcjUiXuHAGxXhdNY+Ed0KBo70kv6uhy67k6GibMChO+AbRq8wcSnlef8MCETJg7JmTC/LleD5kwK0zIhPljQibMHxMyYfbKduUJfUv6vaoCWW3zLelfM2LUou6MCXJCx+7oDciBWvEnBOlr/kBC6zGMB5C+1DneD9rosuvImxPBCiC7wM59mUF00ZUmJMToaCYM+SgDvn+4ABks3NuHMB1N4X67gGmk7r6mjC63gWtIhDqc6HoSowtt4xgwgJ7CgWPAgDp86XoQQWbdN44HEasKHeMF2GPo6Gq66BJbmbsauE9KrA8iXCM1z01BVmieGVdr8KrQWIkwb4bP5KgPeIourI+hneK8+r7QLg1DttErZUK4sfBOu74fXc4JlHUYXUw/7YARXU4/7X53dDn9tJ+wRZfTTf2SCDtYaGc1J9yEygPtwAmVy1HACZUDPnBCXUDYhCL6hJARTd/NIL4fGlei4O79sK8m4r1AWVeEwXYtCv2U9AZvydu6bwFy7vLBfrYNLaF9DxismTo2SMEmNsarzC6gelPLcvcd0A2RIrXrlHAHMj2VnfdUW1+NZfYh++rzH4EenLZFzhml8Vffwz7XipS3Nz6bZVmRUnT+bxBGHDL7pcA8zfOnqs6nsc7XPF+cs7gKW6Sb1nt+FN/rSOH/8kDnFDoPSPH4jThGNVbZJXr8fjtE3BW9YL5BtfTosXC+S8YlL+APyDdYrNMJynexxAcL0vhuuYLJ6Hp7n9Up6fOo/J1DYlW6scN5Ddv8UjXVZtb3o0nSHPVzX+iRQopa9CyBJjT/774yCzj/huOEWwQSmfvzBd8l60nNuwsw4TKPZObdyslipH8152fD8XO1MXNuG7s/sE9K2Uz/AXzJKuWNr0IgAAAAAElFTkSuQmCC'
                    alt='' />
            </div>
            <div className='perfil__content'>
                <p>Juan</p>
                <p>Juanes</p>
                <p>Pedrito y los perros</p>
                <p>JJ@gmail.com</p>
            </div>
        </div>
    )
}

export default Perfil