---
layout: post
title:  Conquering FOMO with Statistics
date: 2023-06-03 14:17:00
description: a (moderately) data-driven exploration of social media anxiety
tags: how-to, personal, social-media, fomo
categories: personal
thumbnail: assets/img/fig_coolness_index_biased.png
---
Have you ever felt that nagging fear of missing out, known as FOMO? Well, I've been battling with it for quite some time too. But guess what? I thought of an unconventional solution to tackle FOMO head-on — statistics! I know it sounds bizarre, but hear me out. In this blog post, we'll dive into the world of FOMO, attempt to quantify the rather nuanced world of social media feeds, and explore a data-driven approach to decode this modern anxiety.

First things first, let's break down what FOMO really is. While 'fear' is right there in the acronym, I see it more as an anxiety response. Let's draw a comparison between fear and anxiety: fear triggers the fight-or-flight response, while anxiety simply makes us feel uncomfortable. Urban Dictionary agrees with me and describes FOMO as a form of social anxiety — a compulsive concern that we might miss out on exciting opportunities or events, often triggered by social media posts.

We've all experienced that anxious feeling when our friends plan a fun outing while we are buried in work, or when our colleagues keep getting promoted while we seem stuck in our careers. In today's digital era, where information travels at lightning speed, FOMO has become a significant problem. So, I decided to analyze FOMO from a (relatively) data-driven perspective.

To kick things off, I chose to analyze my Instagram feed — a platform I'm both afraid of and kinda addicted to. As I scrolled through my feed, I noticed a common thread: friends posting pictures of their lives (duh!). From casual outings to exotic vacations, from important life events to lifestyle flaunting, my feed was filled with it all. Now now, before you label me as a disapproving dinosaur who doesn't understand the modern world, let me clarify that I'm not passing any judgments. I am merely observing and my feed reflects a mix of these activities too.

Anyway, life is complex and while scrolling through our feeds we experience a range of emotions. But one thing remains constant — FOMO. So, how can we quantify it? I could have classified each social media post into a category and rated them from 1 to 10 based on the FOMO I experience by looking at the said post, but that approach had obvious drawbacks. Subjective ratings tend to be inconsistent, and a single social media post can fall into multiple categories. So, instead, I simplified things.

In the realm of existence, there are three fundamental aspects that most human beings value: wisdom, health, and wealth. Simplifying further, on any given day, we tend to care about how smart or witty we appear, how good we look, and what our bank account balance is. These three elements provide a basis for quantifying our everyday lives, great! Not so much, since quantifying "brains" can be a tricky exercise. To circumvent this challenge, let's assume that annual income reflects the extent to which one utilizes their intellectual abilities. In fact, it encompasses multiple factors beyond intelligence such as hard work, social amicability, and even cunningness. Likewise, I opt for BMI as a blunt instrument to size up one's appearance. Yet, it's unabashedly oversimplified, for allure resides solely in the eyes of the observer. Whether person A captivates person B might bear little to no connection to A's BMI! Nonetheless, simplified quantification is often necessary when assessing various aspects of natural phenomena, including human existence. Consider the 7 colors of a rainbow or the 5 categories of a hurricane – comprehensible yet reductionist.

Now, let's delve into social media. Our online posts are intended to be reflections of our existence, or rather, what we want others to perceive our existence to be like. Therefore, we can quantify posts in our social media feed broadly based on the income and BMI of the individuals posting them. While intelligence plays a significant role in creating attractive posts and engaging content, we can capture its essence through income, as captivating posts often lead to various monetization opportunities. Here, I propose that the level of FOMO we experience is directly proportional to how distant our daily lives are from the perceived "coolness" we witness in our feeds.

To quantify this, let's embark on a thought experiment. If we randomly followed 1000 people on social media, how "cool" would our feed appear? To answer this, we can explore two questions:

1. What is the average income of the people we are following?
2. What is their BMI?

To determine the average income, we can analyze income tax returns filed by individuals in India. By fitting the relative frequency of Average Gross Total Income to a power law distribution, we observe that while many people earn modest amounts, only a handful make tonnes of money.

Regarding BMI, it is commonly assumed to be normally distributed around the value of 23, indicating that a large majority of the population has an appropriate weight for their height, with fewer individuals either underweight or overweight. However, with the obesity epidemic, this distribution is likely changing as you read this.

Based on the aforementioned data, the income and BMI distributions of the 1000 people we randomly follow might appear as illustrated below:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/fig_income_bmi_hist_unbiased.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1. Distribution of income (A) and BMI (B) for the 1000 people you randomly chose to follow. (For ease of computation, the maximum annual income in this sample is capped at 1 crore per year.)
</div>

These distributions convey a wealth of information, but they can be overwhelming. To simplify matters, let's introduce a scale for assessing the "coolness" of our feed. We can assign a coolness index, denoted as $$C$$ to each post based on the individual's income and their BMI compared to those we are following. The coolness index can be calculated as follows:

$$C = I + |3 - B|$$

Here, $$I$$ score represents the logarithm base 10 of the annual income, while $$B$$ reflects the deviation of the individual's BMI from the mode of the BMI distribution of the 1000 people we follow. The mode is determined as the most frequently occurring value in the distribution.

To put it simplify, if you wish to determine the anticipated level of coolness for any random post you make, you can assign it a score based on your annual income and BMI in comparison to those you follow. It's important to note that this scoring is associated with the specific year the content was created. For example, if you have a moderately athletic physique, your $$B$$ would be 0, and if you earn 10 lakhs per year, your $$I$$ would be 6. According to the formula, your post would be expected to receive a coolness index ranking of 9.

You can estimate the coolness index of your posts $$C$$ by calculating a log of your annual income in the year when the post was curated [just type log10(_your income_) on Google] and for your $$B$$ refer to the table below:

| BMI        | $$B$$ |
| ---------- | ----- |
| < 15       | 3     |
| 15 to 17.9 | 2     |
| 18 to 20.9 | 1     |
| 21 to 23.9 | 0     |
| 24 to 26.9 | 1     |
| 27 to 29.9 | 2     |
| > 30       | 3     |
| ---------- | ----- |

<div class="caption">
    Table 1. Approximate values of B based on BMI
</div>

Getting back to the coolness index, this approach works because income often reflects one's lifestyle, fashion choices, travel experiences, and social engagements. Additionally, a considerable portion of the population finds a slim physique aesthetically pleasing, which is commonly associated with an ideal BMI. Based on this metric, the average coolness distribution when following 1000 people would resemble the graph below:
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center">
        {% include figure.html path="assets/img/fig_coolness_index_unbiased.png" width='50%' class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Figure 2. The coolness index estimated based on the sample of income and BMI for a 1000 people.
</div>

As you can observe, a feed filled with posts from 1000 randomly chosen individuals would primarily consist of posts that come from people with moderate income and acceptable BMI and rank close to 7 on the coolness scale. There would be fewer outliers with very high income and an aesthetic physique. The mode, representing the most common coolness index value, is 6.5. Thus, if our choice of people to follow were genuinely random, our feed would feature posts with coolness rankings ranging from 6 to 8 and therefore, if your own posts rank at 9, you are likely to experience little to no FOMO, whereas a rank of 4 would trigger significant FOMO.

However, our behavior on social media is far from random and not even close to rational. Many of us populate our feeds by following "high achievers" such as movie stars, athletes, or YouTubers. Consequently, our feeds become skewed. To illustrate this statistically, let's randomly select 30% (300 people) from the previous sample and assign them an annual income between 25 lakhs and 1 crore. Additionally, let's attribute them an aesthetically pleasing physique with a BMI ranging from 19 to 21. Here are the skewed distributions of income and BMI:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/fig_income_bmi_hist_biased.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3. Distribution of income (A) and BMI (B) for the 1000 people, has been biased by adding 300 "high achievers". The unbiased histogram are blue in color and the biased ones are yellow.
</div>

This skewed distribution of income and BMI results in the following coolness index graph:
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0" style="text-align: center">
        {% include figure.html path="assets/img/fig_coolness_index_biased.png" width='50%' class="img-fluid rounded z-depth-1" zoomable=true%}
    </div>
</div>
<div class="caption">
    Figure 4. Coolness index estimated using income and BMI for a biased sample that includes 30% "high achievers." The unbiased histogram is represented in blue, while the biased histogram is shown in yellow.
</div>

Although the mean coolness value hasn't shifted significantly, the mode has changed from 6 to 9. This skewness in our feed, favoring high numbers, leads us to believe that our own lives are lacking because we constantly compare ourselves to what appears most frequently in our feed. Moreover, it's essential to recognize that what individuals post on Instagram is not an accurate depiction of their daily lives but rather a carefully curated selection that represents their best selves.

In conclusion, following too many "cool" people may contribute to our unhappiness. However, it is also beneficial to follow individuals we aspire to be like or find fascinating, as they can provide us with a sense of direction and inspiration. Moderation is key to utilizing social media effectively. Additionally, it is crucial to remember that there are countless individuals out there who are similar to or worse off than ourselves, suggesting that we may be better off than we perceive.

Disclaimer: I must clarify that I am not an expert in economics, finance, or social sciences. Therefore, several assumptions have been made throughout this discussion, which may not hold true in every circumstance. Furthermore, this exercise involves a considerable oversimplification, as humans are complex beings who cannot be reduced to their income and BMI alone. Keep in mind that this is merely an illustrative exercise. Happy thinking!
