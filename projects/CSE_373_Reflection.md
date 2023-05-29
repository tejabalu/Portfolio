---
title: CSE 373 Reflection
date: March 4th, 2022
description: Personal reflections after going through the course Data Structures and Algorithms (CSE 373) at Paul G. Allen School of Computer Science and Engineering (University of Washington).
thumbnailURL: "/projects/CSE_373_Reflection/title.webp"
tags: ["Algorithms", "CS", "Data Structures"]
order: 6
---

# Data Structures and Algorithms Course Reflections

![](../public/projects/CSE_373_Reflection/DataStructuresMindMap.png)

While any traditional computer programming course limits its encouragement to apply the fastest and most optimized algorithms, CSE 373 takes a step further and encourages one to think about the socio-technical impacts a program and software can have. Introducing concepts in a curated manner, they are also linked to real-life scenarios and case studies where different approaches to designing software and algorithms led to debilitated or enhanced social situations.

It is easy for engineers and scientists to get lost in the details and technicalities of their fields and sometimes forget about the larger societal impacts. One does not usually face questions on the consequences of their works on people until they are thrown into the real world; these lessons can come at a price as one might have to learn from a mistake after it has already happened. As the topic of **_‘Searching and Sorting’_** was introduced with comparable data, it was also encouraged to look at how different data is organized and how it might impact people. For a specific example, while we are on the topic of search suggestions, how would one design a simple application of maps? What should the search suggestions be based on? Should we prioritize and suggest places that are most popular on the top? Assuming that we suggest places based on their popularity (after all, if it's popular, wouldn’t there be a high probability that people are looking up for it?), this might end up creating a vicious feedback loop that keeps encouraging popular places and upcoming and businesses that are just starting might be negatively affected.

> How will our decisions on algorithms affect people from different cultural and economic backgrounds?

---

## Affordance Analysis

This is a nice segue into the topic of **_Affordance Analysis_**. Traditional DS-Algo courses cover the topic of **_Asymptotic Analysis_** - the study of speed and performance of algorithms in the worst-case scenarios. Affordance is the property of products that enable certain actions by the virtue of their design. Affordance analysis involves the study of products and their affordances and the ramifications they have. As the course progressed, one was encouraged to look at both asymptotes and affordances of products, enabling one to not only design faster and optimized software, but also the ones that are inclusive and considerate of all the stakeholders. Entrenched in the specificity and deterministic nature that Asymptotic Analysis provides, one certainly has to go through rewiring of mind to understand the affordance of products.

> Affordance analysis is the study of affordances that a product offers that promotes its usage in a specific way or purpose.

Personally, the biggest shift in my understanding occurred when I went through the graphs, traversals, and graph algorithms. As we were looking at a specific application of graph traversals in the field of image processing (**_seam carving_** to enable context-aware resizing of images), we were asked to look at the affordance of this specific algorithm. Drawing analogies from _DeepFakes_, I realized that a seemingly harmless algorithm such as seam carving was susceptible to similar results. The affordance of seam carving allows one to change resize images, and a particular application can even remove selected artifacts. The advent of DeepFakes and the affordance it has (that it can be used by unskilled people, which in many cases was supposed to be positive) unfortunately allowed for it to be used in negative connotations than positive. Classifying the effects of DeepFakes as ‘misinformation’ is an understatement, when it was used to create videos of people saying and doing things that they didn’t, sometimes for satires and spoofs, and more often in more malicious scenarios. A study in 2019 determined that a staggering 96% of DeepFake videos were used in pornography, and as Danielle Citron, a professor at Boston University puts it, “is being weaponized against women.”

The affordance of DeepFakes is that it allows one to make realistic images and videos of people whose faces are morphed into others, and in a way that is not detectable. While researchers are trying for ways to detect DeepFakes, their research is used to patch the current DeepFake techniques to make them more undetectable. Seam carving faces the same loopholes as DeepFakes. As one gets the chance to change image sizes, without cropping them and preserving the ‘important artifacts’, or removing the artifacts altogether has the affordance of creating images that are different from the original. It lacks a mechanism to let the users know that the information was changed, and is a perfect opportunity for one to use it for malicious purposes. While this perspective of misinformation is just one single perspective on Seam carving, it also faces other issues; the use of a particular energy function to determine the least path has ramifications on the kinds of information is removed from the image while resizing. As pointed out by Kevin Lin in his paper _[Do Abstractions Have Politics? Toward a More Critical Algorithm Analysis](https://arxiv.org/pdf/2101.00786.pdf#:~:text=In%20other%20words%2C%20abstractions%20have,values%20embodied%20by%20their%20affordances.&text=To%20identify%20the%20affordances%20of,makes%20available%E2%80%9D%20%5B1%5D.),_ particular use of energy function erased parts of the body of dark-skinned women in an image and calls out on the absence of affordance analysis by the researchers.

These biases, lack of inclusivity, and refactoring it to use for malicious purposes might not always be intentional by the designers. For example, if we want to develop a face recognition algorithm using machine learning, one might just train against one kind of data set that has people of certain backgrounds due to the lack of availability of people of all representations. Google’s voice recognition algorithm initially only identified accents from the western countries before releasing more inclusive software.

> Considering all these potential pitfalls, I feel more empowered to identify and remove these malicious consequences from the software I develop.

---

## How do we learn effectively and collaboratively?

Having started the software engineering journey as a self-taught programmer, I realize the value and perils of learning in a classroom setting. While one can have a solid foundation in theoretical knowledge with access to the right sources, one also might miss out on the process of self-learning and the skill to search and find out new things (which is invaluable in a real-world setting where one needs constant learning).

CSE 373 takes a novel approach of having to learn most of the theoretical bases before the class itself. The class is a further discussion that helps one to strengthen the concepts. This approach has the best of both worlds where one can go through the process of self-learning while still having access to expert help and guidance when required.

As one progresses through the course and project assignments, one is always encouraged to work in teams and collaborate while solving problems and writing code. While this has the obvious advantage of having an opportunity to get exposed to new perspectives, it also gives opportunities to make meaningful connections and for one to become a more considerate and inclusive software engineer.

As per my future plans, my goal is to practice and become better in software engineering (specifically Python), with a tinge of DevOps.

Thanks for reading!
