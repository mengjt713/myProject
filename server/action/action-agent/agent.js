
const agent={

      getAgent:function(type){
          if(type=='all'){
              return {
                  "code": "000000",
                  "message": "",
                  "content": [
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 1
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 2
                      },
                      {
                          "name": "bjstdmngbdr10.thoughtworks.com",
                          "os": "ubuntu",
                          "status": "building",
                          "type": "physical",
                          "ip": "192.168.1.117",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari"
                          ],
                          "id": 3
                      },
                      {
                          "name": "bjstdmngbdr11.thoughtworks.com",
                          "os": "debian",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.102",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 4
                      },
                      {
                          "name": "bjstdmngbdr15.thoughtworks.com",
                          "os": "suse",
                          "status": "idle",
                          "type": "physical",
                          "ip": "192.168.1.110",
                          "location": "/var/lib/cruise-agent",
                          "resources": [],
                          "id": 5
                      },
                      {
                          "name": "bjstdmngbdr02.thoughtworks.com",
                          "os": "centos",
                          "status": "idle",
                          "type": "virtual",
                          "ip": "192.168.1.103",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 6
                      },
                      {
                          "name": "bjstdmngbdr04.thoughtworks.com",
                          "os": "suse",
                          "status": "idle",
                          "type": "physical",
                          "ip": "192.168.1.113",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 7
                      },
                      {
                          "name": "bjstdmngbdr22.thoughtworks.com",
                          "os": "centos",
                          "status": "idle",
                          "type": "virtual",
                          "ip": "192.168.1.111",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 8
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 10
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 11
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 12
                      }
                  ]
              }

          }else if(type =='physical'){
              return {
                  "code": "000000",
                  "message": "",
                  "content": [
                      {
                          "name": "bjstdmngbdr10.thoughtworks.com",
                          "os": "ubuntu",
                          "status": "building",
                          "type": "physical",
                          "ip": "192.168.1.117",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari"
                          ],
                          "id": 3
                      },
                      {
                          "name": "bjstdmngbdr15.thoughtworks.com",
                          "os": "suse",
                          "status": "idle",
                          "type": "physical",
                          "ip": "192.168.1.110",
                          "location": "/var/lib/cruise-agent",
                          "resources": [],
                          "id": 5
                      },
                      {
                          "name": "bjstdmngbdr04.thoughtworks.com",
                          "os": "suse",
                          "status": "idle",
                          "type": "physical",
                          "ip": "192.168.1.113",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 7
                      }
                  ]
              }
          }else if(type =='virtual'){
              return {
                  "code": "000000",
                  "message": "",
                  "content": [
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 1
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 2
                      },
                      {
                          "name": "bjstdmngbdr15.thoughtworks.com",
                          "os": "suse",
                          "status": "idle",
                          "type": "physical",
                          "ip": "192.168.1.110",
                          "location": "/var/lib/cruise-agent",
                          "resources": [],
                          "id": 5
                      },
                      {
                          "name": "bjstdmngbdr02.thoughtworks.com",
                          "os": "centos",
                          "status": "idle",
                          "type": "virtual",
                          "ip": "192.168.1.103",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 6
                      },
                      {
                          "name": "bjstdmngbdr22.thoughtworks.com",
                          "os": "centos",
                          "status": "idle",
                          "type": "virtual",
                          "ip": "192.168.1.111",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 8
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 10
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 11
                      },
                      {
                          "name": "bjstdmngbdr08.thoughtworks.com",
                          "os": "windows",
                          "status": "building",
                          "type": "virtual",
                          "ip": "192.168.1.80",
                          "location": "/var/lib/cruise-agent",
                          "resources": [
                              "Firefox",
                              "Safari",
                              "Ubuntu",
                              "Chrome"
                          ],
                          "id": 12
                      }
                  ]
              }
          }

      }
};

module.exports=agent;
