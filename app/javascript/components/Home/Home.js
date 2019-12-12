import React, { Component } from "react";
import Jumbotron from "./Jumbotron";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      lesson_modules: [
        {
          id: 1,
          title: "1. First Lesson",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget venenatis est. Phasellus molestie enim ornare suscipit mollis. Mauris at tellus rutrum enim bibendum ultricies. Cras porta elementum mauris, at maximus metus tempor ut. Suspendisse efficitur ligula eget nisi tempus ultrices. Nam ac iaculis arcu. Phasellus sit amet eros egestas, ultrices est vel, semper felis. Sed ut viverra odio. Aliquam et vulputate est. Nulla malesuada ut nibh id accumsan. Mauris ac sapien non est facilisis volutpat sit amet sit amet mauris. Phasellus odio nisi, finibus sit amet ullamcorper non, egestas id urna. Donec elementum scelerisque varius. Donec laoreet urna ut erat placerat suscipit. Fusce tincidunt quam quis ipsum tempus, finibus ultrices lectus tristique. Sed molestie tellus leo.",
          active: false
        },
        {
          id: 2,
          title: "2. Second Lesson",
          description:
            "Duis nec rutrum tortor, eget porta enim. Sed accumsan purus in neque commodo, vitae pulvinar nisl malesuada. Cras non metus nulla. Proin scelerisque turpis enim, et volutpat risus eleifend non. In tristique, enim eget eleifend accumsan, odio libero venenatis est, lobortis porttitor ante sem eget urna. Pellentesque condimentum leo sed aliquam volutpat. Proin vitae ipsum risus. Maecenas auctor purus nec fermentum rhoncus.",
          active: false
        },
        {
          id: 3,
          title: "3. Third Lesson",
          description:
            "Nunc vel laoreet purus, eget tristique libero. Morbi sed erat eget metus eleifend fermentum pretium quis metus. Nullam eget leo mollis, feugiat augue ut, vulputate turpis. Maecenas dictum ac eros sit amet lobortis. Cras auctor faucibus odio, at ultrices purus ultricies eu. Sed id vulputate dolor. Nunc imperdiet, tellus faucibus luctus feugiat, urna odio bibendum lorem, id mattis turpis metus a ante. Pellentesque lectus magna, tristique rutrum sodales vel, ornare ac erat. Etiam euismod dictum lectus nec posuere. Pellentesque placerat sollicitudin eros non accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tempor congue urna sed imperdiet. Praesent euismod fringilla dolor, nec fermentum velit.",
          active: false
        },
        {
          id: 4,
          title: "4. Fourth Lesson",
          description:
            "Quisque vitae tortor sapien. Duis vel varius tortor, ac tincidunt eros. Duis auctor, nulla eu porttitor auctor, metus turpis efficitur nisl, vel posuere ligula est eu purus. Sed lectus massa, ullamcorper eget velit eget, volutpat ultrices ante. Vestibulum consequat quam est, in venenatis tellus ullamcorper sit amet. Donec ut rhoncus elit. Donec vel rutrum augue. Etiam blandit tristique mi ut pulvinar. Etiam in finibus magna. Sed volutpat metus mauris, a efficitur turpis tempus sed. Integer ullamcorper pretium velit et convallis. Suspendisse et odio est. Fusce commodo lorem vitae feugiat cursus.",
          active: false
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
