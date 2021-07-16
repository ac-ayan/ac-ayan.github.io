import useSound from 'use-sound';
import boopSfx from '../assets/sounds/alcatel_success.mp3';
import {Button} from "react-bootstrap";
const Success = () => {
  const [play] = useSound(boopSfx);
  return <Button onClick={play}>Send Message <i class="fas fa-paper-plane"></i></Button>;
};
export default Success;