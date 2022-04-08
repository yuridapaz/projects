import styled from 'styled-components';

/// container ///
export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Red+Hat+Display:wght@300;500;600;700;800;900&display=swap');
  font-family: 'Merriweather Sans', sans-serif;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-image: url(https://c.pxhere.com/photos/e2/63/light_bokeh_night_decoration_blur-1076457.jpg!d);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/// input ///
export const Input = styled.input`
  position: absolute;
  top: 4rem;
  width: 80%;
  max-width: 20rem;
  height: 2.2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 2rem;
  border: none;
  border-radius: 8rem;
  opacity: 0.8;
`;

/// card ///
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  transition: 1s ease;
`;

export const Content = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #fff;
`;

export const Name = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Temperature = styled.h1`
  font-size: 5rem;
`;

export const Description = styled.h3`
  font-size: 0.9rem;
  margin-bottom: 2.5rem;
`;

/// bottom div ///
export const BottomDiv = styled.div`
  max-width: 500px;
  position: absolute;
  bottom: 2rem;
  left: 30px;
  right: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #c3e0e530;
  border-radius: 15px;
`;

export const DivInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 15px;
  span {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;
