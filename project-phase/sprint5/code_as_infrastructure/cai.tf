variable "access_key" {}
variable "secret_key" {}
variable "region" {}

provider "aws" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}

resource "aws_instance" "example" {
  ami           = "ami-656be372"
  instance_type = "t1.micro"

  tags {
   Name = "mallac-lev-staging-example"
  }




}
