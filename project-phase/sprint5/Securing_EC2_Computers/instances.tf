variable "access_key-aws" {}
variable "secret_key-aws" {}
variable "region-aws" {}

provider "aws" {
  access_key = "${var.access_key-aws}"
  secret_key = "${var.secret_key-aws}"
  region     = "${var.region-aws}"
}

resource "aws_instance" "securing" {
  ami = "ami-656be372"
  instance_type = "t1.micro"
  
  tags {
   Name = "mallac-lev-securing_ec2_instance"
  }

  connection {
    type = "ssh"
    user = "ec2-user"
    private_key = "${file("./mallachite-lev.pem")}"
  }

  provisioner "file" {
    source      = "script.sh"
    destination = ".script.sh"
  }

    provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/script.sh",
      "/tmp/script.sh args",
    ]
  }
}
