---
title: GitlabCICD
---

参考文档：https://docs.gitlab.com/ee/topics/build_your_application.html


gitlab-ci 由 pipelines 组成，每一个流水线中又包含不同的 stage 阶段，每一个阶段中又包含多个 job 任务。以此形成了完整的 gitlab-cicd

```yaml
stages:
  - gitCheck
  - build
  - deploy
```

```yaml title="job"
job:
  stage: deploy
  image: ubuntu:latest
  script:
    - echo "hello"
  artifacts:
    paths:
      - "public/"
  allow_failure: true
  rules:
    - if: $CI_COMMIT_BRANCH == 'main'
```

