provider "aws" {
  access_key = "AKIAJFIDHYLFLOP52NQQ"
  secret_key = "KRxUMMnAshGfz48PReSRf0V6MafdMd1Y6hMJsg3o"
  region     = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-2757f631"
  instance_type = "t2.micro"
}
